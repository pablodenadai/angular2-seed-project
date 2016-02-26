'use strict';

var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	env = require('./../gulpfile.env');

var merge = require('merge-stream');

module.exports = function assets() {
	var images = gulp.src('src/images/**/*.{png,jpg,gif}')
		.pipe(plugins.size({ title: 'images' }))
		.pipe(gulp.dest('build/images'));

	var fonts = gulp.src('src/fonts/**/*.{eot,ttf,otf,woff}')
		.pipe(plugins.size({ title: 'fonts' }))
		.pipe(gulp.dest('build/fonts'));

	var libs = gulp.src(env.paths.libs.js, { base: '.' })
		.pipe(plugins.if(env.isProd, plugins.concat('libs.js')))
		.pipe(plugins.if(env.isProd, plugins.uglify({ mangle: false	})))
		.pipe(plugins.size({ title: 'libs' }))
		.pipe(gulp.dest('build/libs'));

	return merge(images, fonts, libs);
};
