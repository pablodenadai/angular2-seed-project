'use strict';

var env = require('./gulpfile.env');

module.exports = function(karma) {
	var config = {
		basePath: '',
		frameworks: ['jasmine'],

		files: [
			...env.test.libs.js,
			{ pattern: '.karma/**/*.js', included: false }
		],

		reporters: ['progress', 'coverage'],

		preprocessors: {
			/**
			 * Source files, that you want to generate coverage for.
			 * Do not include tests or libraries.
			 * These files will be instrumented by Istanbul.
			 */
			'.karma/**/*!(.spec).js': ['coverage']
		 },

		/** Optionally, configure the reporter */
		coverageReporter: {
			type: 'json',
			subdir: './json',
			file: 'coverage-js.json'
		},

		singleRun: true,
		port: 9876,
		colors: true,
		logLevel: karma.LOG_INFO,

		/**
		 * @param browsers {Array} List of browsers for Karma to run the tests against.
		 * We can use `Chrome`, `Firefox` or `PhantomJS` out-of-the-box here.
		 */
		browsers: ['PhantomJS'],

		plugins: [
			'karma-jasmine',
			'karma-coverage',
			'karma-firefox-launcher',
			'karma-chrome-launcher',
			'karma-phantomjs-launcher'
		],

		customLaunchers: {
			ChromeTravisCI: {
				base: 'Chrome',
				flags: ['--no-sandbox']
			}
		}
	};

	/**
	 * `PhantomJS2` support is limited in Travis CI so we use `Chrome` instead.
	 * Note that we also need to configure Travis so it enables Chrome.
	 * See `before_script` in the `.travis.yml` file.
	*/
	if (process.env.TRAVIS) {
		config.browsers = ['ChromeTravisCI'];
	}

	karma.set(config);
};
