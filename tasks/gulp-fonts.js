'use strict';

var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')();

gulp.task('fonts', () => {
	return gulp.src('src/fonts/**/*.{eot,ttf,otf,woff}')
		// Incremental build - only pass fonts that have changed
		// Compares files against the ones in the dest folder
		.pipe(plugins.changed('build/fonts'))
		.pipe(plugins.size({ title: 'fonts' }))
		.pipe(gulp.dest('build/fonts'));
});
