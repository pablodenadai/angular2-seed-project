'use strict';

var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	env = require('./../gulpfile.env');

var history = require('connect-history-api-fallback');

gulp.task('livereload', () => {
	return plugins.connect.server({
		root: 'build',
		livereload: true,
		port: env.PORT,
		// Add support for HTML5 routing mode
		middleware: (connect, opt) => [history()]
	});
});
