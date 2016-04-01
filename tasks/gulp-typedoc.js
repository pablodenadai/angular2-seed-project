'use strict';

var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	env = require('./../gulpfile.env');

module.exports = function typedoc() {
	return gulp.src([
		'src/scripts/**/*.ts',
		'!src/scripts/**/*.spec.ts',
		...env.typings
	]).pipe(plugins.typedoc({
		module: 'commonjs',
		target: 'es5',
		experimentalDecorators: true,
		out: 'docs'
	}));
};
