'use strict';

var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	env = require('./../gulpfile.env');

var karma = require('karma'),
	typescript = require('typescript'),
	del = require('del'),
	path = require('path'),
	remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');

var project = plugins.typescript.createProject('tsconfig.json', {
	typescript
});

function karmaClean() {
	return del(['.karma']);
}

function karmaTypescript() {
	var root = 'src/scripts';
	var glob = 'src/scripts/**/*.ts';
	var dest = '.karma';

	return gulp.src(glob)
		.pipe(plugins.tslint())
		.pipe(plugins.tslint.report('verbose'))
		.pipe(plugins.preprocess({ context: env }))
		.pipe(plugins.inlineNg2Template({ useRelativePaths: true }))
		.pipe(gulp.src(env.typings, { passthrough: true }))
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.typescript(project)).js
		.pipe(plugins.sourcemaps.write({
			includeContent: false,
			sourceRoot: path.join(process.cwd(), root)
		}))
		.pipe(plugins.size({ title: 'karmaTypescript' }))
		.pipe(gulp.dest(dest));
}

function karmaRun(done) {
	return new karma.Server({
		configFile: path.join(process.cwd(), 'karma.conf.js')
	}, done).start();
}

function karmaRemapIstanbul() {
	return gulp.src('coverage/json/coverage-js.json')
		.pipe(remapIstanbul({
			reports: {
				json: 'coverage/json/coverage-ts.json',
				html: 'coverage/html-report'
			}
		}));
}

gulp.task('unit', gulp.series(
	karmaClean,
	karmaTypescript,
	karmaRun,
	karmaRemapIstanbul,
	karmaClean
));
