'use strict';

var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')();

var webdriver = require('gulp-protractor').webdriver_update,
	del = require('del');

var ts = require('./gulp-ts');

var tsProtractorProject = plugins.typescript.createProject('tsconfig.json', {
	typescript: require('typescript'),
	module: 'commonjs'
});

function clean() {
	return del(['.protractor']);
}


function tsProtractor() {
	var root = 'e2e';
	var glob = 'e2e/**/*.ts';
	var dest = '.protractor';

	return ts(root, glob, dest, tsProtractorProject);
}

function updateWebdriver(done) {
	webdriver({}, done);
}

function run() {
	return gulp.src('.protractor/**/*.spec.js')
		.pipe(plugins.protractor.protractor({
			configFile: 'protractor.conf.js'
		}))
		.on('error', e => { throw e })
}

module.exports = gulp.series(
	clean,
	tsProtractor,
	updateWebdriver,
	run,
	clean
);
