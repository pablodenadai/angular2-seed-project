'use strict';

var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')();

var karma = require('karma'),
	del = require('del'),
	path = require('path'),
	remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');

var ts = require('./gulp-ts');

var tsKarmaProject = plugins.typescript.createProject('tsconfig.json', {
	typescript: require('typescript')
});

function clean() {
	return del(['.karma']);
}

function tsKarma(root) {
	var root = 'src/scripts';
	var glob = 'src/scripts/**/*.ts';
	var dest = '.karma';

	return ts(root, glob, dest, tsKarmaProject);
}

function run(done) {
	return new karma.Server({
		configFile: path.join(__dirname, '../karma.conf.js')
	}, done).start();
}

function remapCoverage() {
	return gulp.src('coverage/json/coverage-js.json')
		.pipe(remapIstanbul({
			reports: {
				json: 'coverage/json/coverage-ts.json',
				html: 'coverage/html-report'
			}
	}));
}

module.exports = gulp.series(
	clean,
	tsKarma,
	run,
	remapCoverage,
	clean
);
