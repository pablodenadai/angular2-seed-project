'use strict';

var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	env = require('./../gulpfile.env');

var history = require('connect-history-api-fallback');

module.exports = function livereload() {
	return plugins.connect.server({
		root: 'build',
		livereload: env.isDev,
		port: env.PORT,
		middleware: (connect, opt) => [history()]
	});
};
