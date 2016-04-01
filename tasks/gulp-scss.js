'use strict';

var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	env = require('./../gulpfile.env');

var path = require('path');

module.exports = function scss() {
	return gulp.src('src/scss/**/!(_)*.{scss,sass}')

		// Linting
		.pipe(plugins.sassLint({ config: '.sass-lint.yml' }))
		.pipe(plugins.sassLint.format())
		.pipe(plugins.sassLint.failOnError())

		// Sourcemap and transpilation
		.pipe(plugins.if(env.isDev, plugins.sourcemaps.init()))
		.pipe(plugins.sass())
		.pipe(plugins.if(env.isDev, plugins.sourcemaps.write()))

		// Display files size
		.pipe(plugins.size({ title: 'sass' }))

		// Output files to dest folder
		.pipe(gulp.dest('build/css'))

		// Invoke live reload
		.pipe(plugins.connect.reload());
};
