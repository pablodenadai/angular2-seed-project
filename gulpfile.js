'use strict';

var gulp = require('gulp');

var clean = require('./tasks/gulp-clean'),
	scss = require('./tasks/gulp-scss'),
	typescript = require('./tasks/gulp-typescript'),
	images = require('./tasks/gulp-images'),
	fonts = require('./tasks/gulp-fonts'),
	libs = require('./tasks/gulp-libs'),
	index = require('./tasks/gulp-index'),
	typedoc = require('./tasks/gulp-typedoc'),
	karma = require('./tasks/gulp-karma'),
	protractor = require('./tasks/gulp-protractor'),
	livereload = require('./tasks/gulp-livereload'),
	watch = require('./tasks/gulp-watch'),
	changelog = require('./tasks/gulp-changelog');

gulp.task('clean', clean);

gulp.task('build', gulp.series(
	clean,
	gulp.parallel(scss, typescript, images, fonts, libs),
	index
));

gulp.task('serve', gulp.parallel(
	watch,
	livereload
));

gulp.task('unit', karma);

gulp.task('e2e', protractor);

gulp.task('docs', typedoc);

gulp.task('changelog', changelog);
