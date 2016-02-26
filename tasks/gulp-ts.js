var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	env = require('./../gulpfile.env');

var path = require('path');

module.exports = function ts(root, glob, dest, project) {
	var result = gulp.src([glob, ...env.typings])
		.pipe(plugins.tslint())
		.pipe(plugins.tslint.report('verbose'))
		.pipe(plugins.preprocess({ context: env }))
		.pipe(plugins.inlineNg2Template({ useRelativePaths: true }))
		.pipe(plugins.if(env.isDev, plugins.sourcemaps.init()))
		.pipe(plugins.typescript(project));

	return result.js
		.pipe(plugins.if(env.isProd, plugins.uglify({ mangle: false })))
		.pipe(plugins.if(env.isDev, plugins.sourcemaps.write({
			sourceRoot: path.join(__dirname, '../', root)
		})))
		.pipe(plugins.size({ title: 'ts' }))
		.pipe(gulp.dest(dest))
		.pipe(plugins.connect.reload());
};
