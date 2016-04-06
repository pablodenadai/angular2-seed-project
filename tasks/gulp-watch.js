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
	gulp.watch('src/index.html', index);
	gulp.watch('src/scss/**/*.scss', scss);
	gulp.watch('src/images/**/*.{png,jpg,gif}', images);
	gulp.watch('src/fonts/**/*.{eot,ttf,otf,woff}', fonts);
	gulp.watch('src/scripts/**/*.spec.ts', karma);
	gulp.watch('src/scripts/**/!(*.spec).{ts,css,html}', gulp.series(typescript, karma));
};
