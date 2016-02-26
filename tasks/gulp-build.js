'use strict';

var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	env = require('./../gulpfile.env');

var ts = require('./gulp-ts');

var tsProject = plugins.typescript.createProject('tsconfig.json', {
	typescript: require('typescript'),
	outFile: env.isProd ? 'app.js' : undefined
});

module.exports = function build() {
	var root = 'src/scripts';
	var glob = 'src/scripts/**/*!(.spec).ts';
	var dest = 'build/js';

	return ts(root, glob, dest, tsProject);
};
