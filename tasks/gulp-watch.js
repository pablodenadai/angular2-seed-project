'use strict';

var gulp = require('gulp');

var index = require('./gulp-index'),
	karma = require('./gulp-karma'),
	scss = require('./gulp-scss'),
	images = require('./gulp-images'),
	fonts = require('./gulp-fonts'),
	libs = require('./gulp-libs'),
	typescript = require('./gulp-typescript');

module.exports = function watch() {
	// Both `css` and `html` are included in the srcGlob because they're injected
	// into the JS files when using external partials - eg. `templateUrl` or `stylesUrl`.
	// Injection is done by the `inlineNg2Template` plugin in the `typescript` task.
	gulp.watch([
		'src/scripts/**/*.{ts,css,html}',
		'!src/scripts/**/*.spec.ts'
	], gulp.series(typescript, karma));

	gulp.watch('src/scss/**/*.scss', scss);
	gulp.watch('src/images/**/*.{png,jpg,gif}', images);
	gulp.watch('src/fonts/**/*.{eot,ttf,otf,woff}', fonts);
	gulp.watch('src/index.html', index);
	gulp.watch('src/scripts/**/*.spec.ts', karma);
};
