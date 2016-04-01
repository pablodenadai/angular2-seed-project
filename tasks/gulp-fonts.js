'use strict';

var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')();

module.exports = function fonts() {
	return gulp.src('src/fonts/**/*.{eot,ttf,otf,woff}')

		// Incremental build - only pass fonts that have changed
		// Compares files against the ones in the dest folder
		.pipe(plugins.changed('build/fonts'))

		// Display files size
		.pipe(plugins.size({ title: 'fonts' }))

		// Output files to dest folder
		.pipe(gulp.dest('build/fonts'));
};
