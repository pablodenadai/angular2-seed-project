'use strict';

var gulp = require('gulp');

require('./tasks/gulp-clean'),
require('./tasks/gulp-scss'),
require('./tasks/gulp-typescript'),
require('./tasks/gulp-images'),
require('./tasks/gulp-fonts'),
require('./tasks/gulp-libs'),
require('./tasks/gulp-index'),
require('./tasks/gulp-typedoc'),
require('./tasks/gulp-karma'),
require('./tasks/gulp-protractor'),
require('./tasks/gulp-livereload'),
require('./tasks/gulp-watch'),
require('./tasks/gulp-changelog');

gulp.task('build', gulp.series(
	'clean',
	gulp.parallel('scss', 'typescript', 'images', 'fonts', 'libs'),
	'index'
));

gulp.task('serve', gulp.parallel(
	'watch',
	'livereload'
));
