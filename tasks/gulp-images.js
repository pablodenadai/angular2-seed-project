'use strict';

var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')();

module.exports = function images() {
	return gulp.src('src/images/**/*.{png,jpg,gif}')

		// Incremental build - only pass images that have changed
		// Compares files against the ones in the dest folder
		.pipe(plugins.changed('build/images'))

		// Image optimization
		.pipe(plugins.imagemin())

		// Display files size
		.pipe(plugins.size({ title: 'images' }))

		// Output files to dest folder
		.pipe(gulp.dest('build/images'));
};
