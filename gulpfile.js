/**
 * Usage:
 * `$ NODE_ENV=<development/production> PORT=<port> gulp <task>`
 */

var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')();

var del = require('del'),
	path = require('path'),
	karma = require('karma'),
	merge = require('merge-stream'),
	history = require('connect-history-api-fallback'),
	webdriver = require('gulp-protractor').webdriver_update,
	remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');

var paths = require('./gulpfile.paths.js');

var DEST_DIR = 'dist';
var SRC_DIR = 'src';
var TEST_DIR = 'test';
var DOC_DIR = 'doc';
var COV_DIR = 'coverage';
var KRM_DIR = '.karma';
var PRO_DIR = '.protractor';

process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
process.env.PORT = process.env.PORT ? process.env.PORT : '8080';

var env = {
	NODE_ENV: process.env.NODE_ENV,
	PORT: process.env.PORT,

	get isDev() { return this.NODE_ENV === 'development'; },
	get isProd() { return this.NODE_ENV === 'production'; },

	get paths() { return this.isDev ? paths.dev : paths.prod; }
};

/**
 * Public Tasks
 */

gulp.task(clean);

gulp.task('build', gulp.series(
	clean,
	gulp.parallel(scss, tsSrc),
	assets,
	index,
	typedoc
));

gulp.task('serve', gulp.series(
	gulp.parallel(watch, livereload)
));

gulp.task('unit', gulp.series(
	karmaClean,
	karmaTsSrc,
	karmaTsSpec,
	karmaRun,
	karmaRemapCoverage,
	karmaClean
));

gulp.task('e2e', gulp.series(
	protractorClean,
	protractorTsSpec,
	protractorUpdate,
	protractorRun,
	protractorClean
));

/**
 * Definitions
 */

function clean() {
	return del([`${DOC_DIR}`, `${COV_DIR}`, `${DEST_DIR}`, `${KRM_DIR}`, `${PRO_DIR}`]);
}

function scss() {
	return gulp.src('src/**/*.{scss,sass}', { base: `${SRC_DIR}/scss` })
		.pipe(plugins.sassLint({ config: '.sass-lint.yml' }))
		.pipe(plugins.sassLint.format())
		.pipe(plugins.sassLint.failOnError())
		.pipe(plugins.rename({ dirname: '' }))
		.pipe(plugins.if(env.isDev, plugins.sourcemaps.init()))
		.pipe(plugins.sass())
		.pipe(plugins.if(env.isDev, plugins.sourcemaps.write()))
		.pipe(plugins.size({ title: 'sass' }))
		.pipe(gulp.dest(`${DEST_DIR}/css`))
		.pipe(plugins.connect.reload());
}

function typedoc() {
	return gulp.src([`${SRC_DIR}/scripts/**/*.ts`, ...paths.typings])
		.pipe(plugins.typedoc({
			module: 'commonjs',
			target: 'es5',
			experimentalDecorators: true,
			out: 'docs'
		}));
}

function ts(filesRoot, filesGlob, filesDest, project) {
	var title = arguments.callee.caller.name;

	var result = gulp.src([...filesGlob, ...paths.typings])
		.pipe(plugins.tslint())
		.pipe(plugins.tslint.report('verbose'))
		.pipe(plugins.preprocess({ context: env }))
		.pipe(plugins.inlineNg2Template({ useRelativePaths: true }))
		.pipe(plugins.if(env.isDev, plugins.sourcemaps.init()))
		.pipe(plugins.typescript(project));

	return result.js
		.pipe(plugins.if(env.isProd, plugins.uglify({
			mangle: false
		})))
		.pipe(plugins.if(env.isDev, plugins.sourcemaps.write({
			sourceRoot: path.join(__dirname, '/', filesRoot)
		})))
		.pipe(plugins.size({ title }))
		.pipe(gulp.dest(filesDest))
		.pipe(plugins.connect.reload());
}

var tsProject = plugins.typescript.createProject('tsconfig.json', {
	typescript: require('typescript'),
	outFile: env.isProd ? 'app.js' : undefined
});

function tsSrc() {
	var filesRoot = `${SRC_DIR}/scripts`;
	var filesDest = `${DEST_DIR}/js`;
	var filesGlob = [
		`${filesRoot}/**/*.ts`
	];

	return ts(filesRoot, filesGlob, filesDest, tsProject);
}

function assets() {
	var images = gulp.src(`${SRC_DIR}/images/**/*.{png,jpg,gif}`)
		.pipe(plugins.size({ title: 'images' }))
		.pipe(gulp.dest(`${DEST_DIR}/images`));

	var fonts = gulp.src(`${SRC_DIR}/fonts/**/*.{eot,ttf,otf,woff}`)
		.pipe(plugins.size({ title: 'fonts' }))
		.pipe(gulp.dest(`${DEST_DIR}/fonts`));

	var libs = gulp.src(env.paths.libs.js, { base: '.' })
		.pipe(plugins.if(env.isProd, plugins.concat('libs.js')))
		.pipe(plugins.if(env.isProd, plugins.uglify({
			mangle: false
		})))
		.pipe(plugins.size({ title: 'libs' }))
		.pipe(gulp.dest(`${DEST_DIR}/libs`));

	return merge(images, fonts, libs);
}

function index() {
	var css = [`${DEST_DIR}/css/*`];
	var libs = [`${DEST_DIR}/libs/*`];

	if (env.isDev) {
		libs = env.paths.libs.js.map(lib => path.join(`${DEST_DIR}/libs/`, lib))
	}

	var source = gulp.src([...css, ...libs], { read: false });

	return gulp.src(`${SRC_DIR}/index.html`)
		.pipe(plugins.inject(source, { ignorePath: `${DEST_DIR}` }))
		.pipe(plugins.preprocess({ context: env }))
		.pipe(gulp.dest( `${DEST_DIR}`))
		.pipe(plugins.connect.reload());
}

function karmaClean() {
	return del([`${KRM_DIR}`]);
}

function karmaTs(root) {
	var project = plugins.typescript.createProject('tsconfig.json', {
		typescript: require('typescript')
	});

	var filesRoot = root;
	var filesDest = `${KRM_DIR}/${root}`;
	var filesGlob = [
		`${root}/**/*.ts`
	];

	return ts(filesRoot, filesGlob, filesDest, project);
}

function karmaTsSrc() {
	return karmaTs(`${SRC_DIR}/scripts`);
}

function karmaTsSpec() {
	return karmaTs(`${TEST_DIR}/unit`);
}

function karmaRun(done) {
	return new karma.Server({
		configFile: __dirname + '/karma.conf.js'
	}, done).start();
}

function karmaRemapCoverage() {
	return gulp.src(`${COV_DIR}/json/coverage-js.json`)
		.pipe(remapIstanbul({
			reports: {
				json: `${COV_DIR}/json/coverage-ts.json`,
				html: `${COV_DIR}/html-report`
			}
	}));
}

function protractorClean() {
	return del([`${PRO_DIR}`]);
}

// TODO check to change this below tsconfig
var protractorTsProject = plugins.typescript.createProject('tsconfig.json', {
	typescript: require('typescript'),
	module: 'commonjs'
});

function protractorTsSpec() {
	var filesRoot = `${TEST_DIR}/e2e`;
	var filesDest = `${PRO_DIR}/${filesRoot}`;
	var filesGlob = [
		`${filesRoot}/**/*.ts`
	];

	return ts(filesRoot, filesGlob, filesDest, protractorTsProject);
}

function protractorUpdate(done) {
	webdriver({}, done);
}

function protractorRun() {
	return gulp.src(`${PRO_DIR}/test/e2e/**/*.spec.js`)
		.pipe(plugins.protractor.protractor({
			configFile: __dirname + '/protractor.conf.js'
		}))
		.on('error', e => { throw e })
}

function watch() {
	gulp.watch(`${SRC_DIR}/scripts/**/*.{ts,css,html}`, gulp.series(tsSrc, 'unit'));
	gulp.watch(`${SRC_DIR}/scss/**/*.scss`, scss);
	gulp.watch(`${SRC_DIR}/index.html`, index);
	gulp.watch(`${TEST_DIR}/unit/**/*.ts`, gulp.series('unit'));
}

function livereload() {
	return plugins.connect.server({
		root: `${DEST_DIR}`,
		livereload: env.isDev,
		port: env.PORT,
		middleware: (connect, opt) => [history()]
	});
}
