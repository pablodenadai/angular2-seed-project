var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	env = require('./../gulpfile.env');

var typescript = require('typescript'),
	path = require('path');

var project = plugins.typescript.createProject('tsconfig.json', {
	typescript,
	outFile: env.isProd ? 'app.js' : undefined
});

module.exports = function typescript() {
	var root = 'src/scripts';
	var glob = [
		'src/scripts/**/*.ts',
		'!src/scripts/**/*.spec.ts'
	];
	var dest = 'build/js';

	var result = gulp.src([...glob, ...env.typings])
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
		.pipe(plugins.size({ title: 'typescript' }))
		.pipe(gulp.dest(dest))
		.pipe(plugins.connect.reload());
};
