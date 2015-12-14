/**
 * Usage:
 * `$ gulp [task] [env]`
 * @param env Options: --dev, --prod. Default: --dev.
 */

var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')();

var argv = require('yargs').argv;
argv.prod = argv.prod || false;
argv.dev = !argv.prod;

var paths = require('./gulpfile.conf.js');
paths = argv.dev ? paths.dev : paths.prod;

/**
 * Public Tasks
 */

gulp.task(clean);

gulp.task('unit', gulp.series(
	karma,
	remapcoverage
));

gulp.task('e2e', gulp.series(
	webdriver,
	protractor
));

gulp.task('build', gulp.series(
	clean,
	gulp.parallel(scsslint, tslint),
	gulp.parallel(scss, ts),
	assets,
	libs,
	index
	// typedoc
));

gulp.task('serve', gulp.series(
	gulp.parallel(watch, livereload)
));

/**
 * Definitions
 */

var del = require('del');
function clean() {
	return del(['docs', 'coverage', 'build']);
}

function scsslint() {
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
		.pipe(plugins.if(argv.dev, plugins.sourcemaps.init()))
		.pipe(plugins.sass())
		.pipe(plugins.if(argv.dev, plugins.sourcemaps.write()))
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

function tslint() {
	return gulp.src('src/scripts/**/*.ts')
		.pipe(plugins.tslint())
		.pipe(plugins.tslint.report('verbose'));
};

var tsProject = plugins.typescript.createProject('tsconfig.json', {
	typescript: require('typescript'),
	outFile: argv.prod ? 'app.js' : undefined
});

function ts() {
	var tsResult = gulp.src('src/scripts/**/*.ts')
		.pipe(plugins.if(argv.dev, plugins.sourcemaps.init()))
		.pipe(plugins.typescript(tsProject));

	return tsResult.js
		.pipe(plugins.if(argv.prod, plugins.uglify()))
		.pipe(plugins.if(argv.dev, plugins.sourcemaps.write('./', {
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
		.pipe(plugins.if(argv.prod, plugins.concat('libs.js')))
		.pipe(plugins.if(argv.prod, plugins.uglify()))
		.pipe(plugins.size({ title: 'libs' }))
		.pipe(gulp.dest('build/lib'));
}

function index() {
	var source = gulp.src(paths.includes, {
		read: false
	});

	return gulp.src('src/index.html')
		.pipe(plugins.inject(source, {
			ignorePath: 'build'
		}))
		.pipe(plugins.preprocess({
			context: argv
		}))
		.pipe(gulp.dest('build'))
		.pipe(plugins.connect.reload());
}

var karma = require('karma');
function karma(done) {
	return new karma.Server({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true,
		autoWatch: false
	}, done).start();
}

var remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');
function remapcoverage() {
	return gulp.src('coverage/json/coverage-js.json')
		.pipe(remapIstanbul({
			reports: {
				json: 'coverage/json/coverage-ts.json',
				html: 'coverage/html-report'
			}
	}));
}

var webdriver_update = require('gulp-protractor').webdriver_update;
function webdriver(cb) {
	webdriver_update({}, cb);
}

function protractor() {
	return gulp.src('test/e2e/**/*.e2e.js')
		.pipe(plugins.protractor.protractor({
			configFile: 'protractor.conf.js'
		}))
		.on('error', function(e) { throw e })
}

function watch() {
	gulp.watch('src/scripts/**/*.ts', gulp.series(tslint, ts, 'unit'));
	gulp.watch('src/scss/**/*.scss', gulp.series(scsslint, scss));
	gulp.watch('src/index.html', index);
	gulp.watch('test/unit/**/*.spec.js', gulp.series('unit'));
}

var history = require('connect-history-api-fallback');
function livereload() {
	return plugins.connect.server({
		root: 'build',
		livereload: true,
		middleware: function(connect, opt) {
			return [history()];
		}
	});
}
