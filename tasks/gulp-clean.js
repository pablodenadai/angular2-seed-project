'use strict';

var del = require('del');

module.exports = function clean() {
	return del(['docs', 'coverage', 'build', '.karma', '.protractor']);
};
