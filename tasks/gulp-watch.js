'use strict';

var gulp = require('gulp');

var index = require('./gulp-index'),
	unit = require('./gulp-karma'),
	scss = require('./gulp-scss'),
	assets = require('./gulp-assets'),
	typescript = require('./gulp-typescript');

module.exports = function watch() {
	// Both `css` and `html` are included in the glob because it's injected
	// into the JS files (output) when using external partials.
	// Injection is done by the `inlineNg2Template` plugin in the `typescript` task.
	gulp.watch([
		'src/scripts/**/*.ts',
		'src/scripts/**/*.css',
		'src/scripts/**/*.html',
		'!src/scripts/**/*.spec.ts'
	], gulp.series(typescript, unit));

	gulp.watch([
		'src/fonts/**/*.{eot,ttf,otf,woff}',
		'src/images/**/*.{png,jpg,gif}'
	], gulp.series(assets));

	gulp.watch('src/scss/**/*.scss', scss);

	gulp.watch('src/index.html', index);

	gulp.watch('src/scripts/**/*.spec.ts', unit);
};
