'use strict';

var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	env = require('./../gulpfile.env');

module.exports = function libs() {
	return gulp.src(env.paths.libs.js, {
		// Keep the directory structure
		base: process.cwd()
	})

	// Concat files - if running in production mode
	.pipe(plugins.if(env.isProd, plugins.concat('libs.js')))

	// Uglify source-code - if running in produciton mode
	// `mangle` is currently disabled due to Angular2 issue
	// See: https://github.com/angular/angular/issues/6380
	.pipe(plugins.if(env.isProd, plugins.uglify({ mangle: false })))

	// Display files size
	.pipe(plugins.size({ title: 'libs' }))

	// Output files to dest folder
	.pipe(gulp.dest('build/libs'));
};
