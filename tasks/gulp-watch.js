'use strict';

var gulp = require('gulp');

gulp.task('watch', () => {
	gulp.watch('src/index.html', gulp.series('index'));
	gulp.watch('src/scss/**/*.scss', gulp.series('scss'));
	gulp.watch('src/images/**/*.{png,jpg,gif}', gulp.series('images'));
	gulp.watch('src/fonts/**/*.{eot,ttf,otf,woff}', gulp.series('fonts'));
	gulp.watch('src/scripts/**/*.spec.ts', gulp.series('unit'));
	gulp.watch('src/scripts/**/!(*.spec).{ts,css,html}', gulp.series('typescript', 'unit'));
});
