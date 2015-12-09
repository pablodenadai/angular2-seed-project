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
	protractor
));

gulp.task('build', gulp.series(
	clean,
	gulp.parallel(lesslint, tslint),
	gulp.parallel(less, ts),
	lib,
	index,
	typedoc
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

function lesslint() {
	return gulp.src('src/**/*.less')
		.pipe(plugins.recess())
		.pipe(plugins.recess.reporter());
}

function less() {
	return gulp.src('src/**/*.less')
		.pipe(plugins.rename({dirname: ''}))
		.pipe(plugins.if(argv.dev, plugins.sourcemaps.init()))
		.pipe(plugins.less())
		.pipe(plugins.if(argv.dev, plugins.sourcemaps.write()))
		.pipe(plugins.size({ title: 'less' }))
		.pipe(gulp.dest('build/css'))
		.pipe(plugins.connect.reload());
}

function typedoc() {
	return gulp.src('src/**/*.ts')
		.pipe(plugins.typedoc({
			module: 'commonjs',
			target: 'es5',
			experimentalDecorators: true,
			out: 'docs'
		}));
}

function tslint() {
	return gulp.src('src/**/*.ts')
		.pipe(plugins.tslint())
		.pipe(plugins.tslint.report('verbose'));
};

var tsProject = plugins.typescript.createProject('tsconfig.json', {
	typescript: require('typescript'),
	outFile: argv.prod ? 'app.js' : undefined
});

function ts() {
	var tsResult = gulp.src('src/**/*.ts')
		.pipe(plugins.if(argv.dev, plugins.sourcemaps.init()))
		.pipe(plugins.typescript(tsProject));

	return tsResult.js
		.pipe(plugins.if(argv.prod, plugins.uglify()))
		.pipe(plugins.if(argv.dev, plugins.sourcemaps.write('./', {
			sourceRoot: __dirname + '/src'
		})))
		.pipe(plugins.size({ title: 'ts' }))
		.pipe(gulp.dest('build/js'))
		.pipe(plugins.connect.reload());
}

function lib() {
	return gulp.src(paths.libs.js)
		.pipe(plugins.if(argv.prod, plugins.concat('libs.js')))
		.pipe(plugins.if(argv.prod, plugins.uglify()))
		.pipe(plugins.size({ title: 'lib' }))
		.pipe(gulp.dest('build/lib'));
}

function index() {
	var source = gulp.src(paths.includes, {
		read: false
	});

	return gulp.src('src/index.html')
		.pipe(plugins.inject(source, {
			ignorePath: 'build',
			addRootSlash: false
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

function protractor() {
	return gulp.src('test/e2e/**/*.e2e.js')
		.pipe(plugins.protractor.protractor({
			configFile: 'protractor.conf.js'
		}))
		.on('error', function(e) { throw e })
}

function watch() {
	gulp.watch('src/**/*.ts', gulp.series(tslint, ts, 'unit'));
	gulp.watch('src/**/*.less', gulp.series(lesslint, less));
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
