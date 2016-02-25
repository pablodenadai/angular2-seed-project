'use strict';

var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	env = require('./../gulpfile.env');

var path = require('path');

module.exports = function index() {
	var css = ['build/css/*'];
	var libs = env.isProd ?
		['build/libs/*'] :
		env.paths.libs.js.map(lib => path.join('build/libs/', lib));

	var source = gulp.src([...css, ...libs], { read: false });

	return gulp.src('src/index.html')
		.pipe(plugins.inject(source, { ignorePath: 'build' }))
		.pipe(plugins.preprocess({ context: env }))
		.pipe(gulp.dest('build'))
		.pipe(plugins.connect.reload());
}
