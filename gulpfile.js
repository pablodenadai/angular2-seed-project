/**
 * Usage:
 * `$ NODE_ENV=<development/production> PORT=<port> gulp <task>`
 */

process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
process.env.PORT = process.env.PORT ? process.env.PORT : '8080';

var env = {};
env.prod = process.env.NODE_ENV === 'production',
env.dev = !env.prod;
env.port = process.env.PORT;

var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')();

var del = require('del'),
	path = require('path'),
	karma = require('karma'),
	history = require('connect-history-api-fallback'),
	webdriver = require('gulp-protractor').webdriver_update,
	remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');

var paths = require('./gulpfile.conf.js');
paths = env.prod ? paths.prod : paths.dev;

/**
 * Public Tasks
 */

gulp.task(clean);

gulp.task('build', gulp.series(
	clean,
	gulp.parallel(scssLint, tsLint),
	gulp.parallel(scss, ts),
	assets,
	libs,
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
	karmaCoverage,
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
	return del(['docs', 'coverage', 'build', '.karma', '.protractor']);
}

function scssLint() {
	return gulp.src('src/**/*.scss')
		.pipe(plugins.sassLint({
			config: '.sass-lint.yml'
		}))
		.pipe(plugins.sassLint.format())
		.pipe(plugins.sassLint.failOnError())
}

function scss() {
	return gulp.src('src/**/*.scss', { base: 'src/scss' })
		.pipe(plugins.rename({dirname: ''}))
		.pipe(plugins.if(env.dev, plugins.sourcemaps.init()))
		.pipe(plugins.sass())
		.pipe(plugins.if(env.dev, plugins.sourcemaps.write()))
		.pipe(plugins.size({ title: 'sass' }))
		.pipe(gulp.dest('build/css'))
		.pipe(plugins.connect.reload());
}

function typedoc() {
	return gulp.src('src/scripts/**/*.ts')
		.pipe(plugins.typedoc({
			module: 'commonjs',
			target: 'es5',
			experimentalDecorators: true,
			out: 'docs'
		}));
}

function tsLint() {
	return gulp.src('src/scripts/**/*.ts')
		.pipe(plugins.tslint())
		.pipe(plugins.tslint.report('verbose'));
};

var tsProject = plugins.typescript.createProject('tsconfig.json', {
	typescript: require('typescript'),
	outFile: env.prod ? 'app.js' : undefined
});
function ts() {
	var tsResult = gulp.src('src/scripts/**/*.ts')
		.pipe(plugins.preprocess({
			context: env
		}))
		.pipe(plugins.inlineNg2Template({
			base: 'src/scripts'
		}))
		.pipe(plugins.if(env.dev, plugins.sourcemaps.init()))
		.pipe(plugins.typescript(tsProject));

	return tsResult.js
		.pipe(plugins.if(env.prod, plugins.uglify()))
		.pipe(plugins.if(env.dev, plugins.sourcemaps.write('./', {
			sourceRoot: __dirname + '/src/scripts'
		})))
		.pipe(plugins.size({ title: 'ts' }))
		.pipe(gulp.dest('build/js'))
		.pipe(plugins.connect.reload());
}

function assets() {
	return gulp.src('src/images/**/*')
		.pipe(plugins.size({ title: 'images' }))
		.pipe(gulp.dest('build/images'));
}

function libs() {
	return gulp.src(paths.libs.js)
		.pipe(plugins.if(env.prod, plugins.concat('libs.js')))
		.pipe(plugins.if(env.prod, plugins.uglify()))
		.pipe(plugins.size({ title: 'libs' }))
		.pipe(gulp.dest('build/lib'));
}

function index() {
	var source = gulp.src(paths.includes, { read: false });

	return gulp.src('src/index.html')
		.pipe(plugins.inject(source, {
			ignorePath: 'build'
		}))
		.pipe(plugins.preprocess({
			context: env
		}))
		.pipe(gulp.dest('build'))
		.pipe(plugins.connect.reload());
}

function karmaClean() {
	return del(['.karma']);
}

function karmaTs(root) {
	var karmaTsProject = plugins.typescript.createProject('tsconfig.json', {
		typescript: require('typescript')
	});

	var caller = arguments.callee.caller.name;

	var tsResult = gulp.src(path.join(root, '/**/*.ts'))
		.pipe(plugins.preprocess({
			context: env
		}))
		.pipe(plugins.inlineNg2Template({
			base: root
		}))
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.typescript(karmaTsProject));

	return tsResult.js
		.pipe(plugins.sourcemaps.write('./', {
			sourceRoot: path.join(__dirname, root)
		}))
		.pipe(plugins.size({ title: caller }))
		.pipe(gulp.dest(path.join('.karma', root)));
}

function karmaTsSrc() {
	return karmaTs('src/scripts');
}

function karmaTsSpec() {
	return karmaTs('test/unit');
}

function karmaRun(done) {
	return new karma.Server({
		configFile: __dirname + '/karma.conf.js'
	}, done).start();
}

function karmaCoverage() {
	return gulp.src('coverage/json/coverage-js.json')
		.pipe(remapIstanbul({
			reports: {
				json: 'coverage/json/coverage-ts.json',
				html: 'coverage/html-report'
			}
	}));
}

function protractorClean() {
	return del(['.protractor']);
}

var protractorTsProject = plugins.typescript.createProject('tsconfig.json', {
	typescript: require('typescript'),
	module: 'commonjs'
});

function protractorTsSpec() {
	var tsResult = gulp.src('test/e2e/**/*.ts')
		.pipe(plugins.typescript(protractorTsProject));

	return tsResult.js
		.pipe(plugins.size({ title: 'protractorTsSpec' }))
		.pipe(gulp.dest('.protractor/test/e2e'));
}

function protractorUpdate(done) {
	webdriver({}, done);
}

function protractorRun() {
	return gulp.src('.protractor/test/e2e/**/*.e2e.js')
		.pipe(plugins.protractor.protractor({
			configFile: 'protractor.conf.js'
		}))
		.on('error', function(e) { throw e })
}

function watch() {
	gulp.watch([
		'src/scripts/**/*.ts',
		'src/scripts/**/*.css',
		'src/scripts/**/*.html'
	], gulp.series(tsLint, ts, 'unit'));
	gulp.watch('src/scss/**/*.scss', gulp.series(scssLint, scss));
	gulp.watch('src/index.html', index);
	gulp.watch('test/unit/**/*.spec.ts', gulp.series('unit'));
}

function livereload() {
	return plugins.connect.server({
		root: 'build',
		livereload: env.dev,
		port: env.port,
		middleware: function(connect, opt) {
			return [history()];
		}
	});
}
