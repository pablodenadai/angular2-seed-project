'use strict';

var gulp = require('gulp');

var index = require('./gulp-index'),
	unit = require('./gulp-karma'),
	scss = require('./gulp-scss'),
	build = require('./gulp-build');

module.exports = function watch() {
	// Both `css` and `html` are included in the glob because it's injected
	// into the JS files (output) when using external partials.
	// Injection is done by the `inlineNg2Template` plugin in the `appTs` task.
	gulp.watch([
		'src/scripts/**/*.ts',
		'src/scripts/**/*.css',
		'src/scripts/**/*.html',
		'!src/scripts/**/*.spec.ts'
	], gulp.series(build, unit));

	gulp.watch('src/scripts/**/*.spec.ts', unit);

	gulp.watch('src/scss/**/*.scss', scss);
	gulp.watch('src/index.html', index);
};
