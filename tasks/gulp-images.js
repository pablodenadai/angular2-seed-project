'use strict';

var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')();

gulp.task('images', () => {
	return gulp.src('src/images/**/*.{png,jpg,gif}')
		// Incremental build - only pass images that have changed
		// Compares files against the ones in the dest folder
		.pipe(plugins.changed('build/images'))
		.pipe(plugins.imagemin())
		.pipe(plugins.size({ title: 'images' }))
		.pipe(gulp.dest('build/images'));
});
