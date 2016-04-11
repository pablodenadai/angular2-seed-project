'use strict';

var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	env = require('./../gulpfile.env');

gulp.task('libs', () => {
	return gulp.src(env.paths.libs.js, {
		base: process.cwd()
	})
	.pipe(plugins.if(env.isProd, plugins.concat('libs.js')))
	// Uglify - `mangle` is currently disabled due to Angular2 issue
	// See: https://github.com/angular/angular/issues/6380
	.pipe(plugins.if(env.isProd, plugins.uglify({ mangle: false })))
	.pipe(plugins.size({ title: 'libs' }))
	.pipe(gulp.dest('build/libs'));
});
