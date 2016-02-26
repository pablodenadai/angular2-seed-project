'use strict';

var gulp = require('gulp');

var clean = require('./tasks/gulp-clean'),
	scss = require('./tasks/gulp-scss'),
	typescript = require('./tasks/gulp-typescript'),
	assets = require('./tasks/gulp-assets'),
	index = require('./tasks/gulp-index'),
	typedoc = require('./tasks/gulp-typedoc'),
	unit = require('./tasks/gulp-karma'),
	e2e = require('./tasks/gulp-protractor'),
	livereload = require('./tasks/gulp-livereload'),
	watch = require('./tasks/gulp-watch')

gulp.task('clean', clean);

gulp.task('build', gulp.series(
	clean,
	gulp.parallel(scss, typescript),
	assets,
	index,
	typedoc
));

gulp.task('serve', gulp.parallel(
	watch,
	livereload
));

gulp.task('unit', unit);

gulp.task('e2e', e2e);
