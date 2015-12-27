/**
 * This setup is based on Julie Ralph's `ng2-test-seed` project.
 * See https://github.com/juliemr/ng2-test-seed
 * Hopefully Angular2 and Karma integration will be more seamless in the future.
 * Unit tests are currently only implemented to run against the development target.
 */

module.exports = function(karma) {
	var config = {
		basePath: '',
		frameworks: ['jasmine'],

		files: [
			/** Paths loaded by Karma */
			{ pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: true },
			{ pattern: 'node_modules/systemjs/dist/system.src.js', included: true },
			{ pattern: 'node_modules/es6-shim/es6-shim.js', included: true },
			{ pattern: 'node_modules/rxjs/bundles/Rx.js', included: true },
			{ pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', included: true },
			{ pattern: 'node_modules/angular2/bundles/angular2.dev.js', included: true },
			{ pattern: 'node_modules/angular2/bundles/router.dev.js', included: true },
			{ pattern: 'node_modules/angular2/bundles/http.dev.js', included: true },
			{ pattern: 'node_modules/angular2/bundles/testing.dev.js', included: true },
			{ pattern: 'karma.shim.js', included: true },

			/** Paths loaded via module imports */
			{ pattern: '.karma/src/scripts/**/*.js', included: false },

			/** Paths to unit tests */
			{ pattern: '.karma/test/unit/**/*.spec.js', included: false }
		],

		reporters: ['progress', 'coverage'],

		preprocessors: {
			/**
			 * Source files, that you want to generate coverage for.
			 * Do not include tests or libraries.
			 * These files will be instrumented by Istanbul.
			 */
			'.karma/src/scripts/**/*.js': ['coverage']
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
		 * We can use `Chrome`, `Firefox` or `PhantomJS2` out-of-the-box here.
		 * Unfortunately `PhantomJS2` support is limited for Linux users or Travis CI.
		 *
		 * Note: When running in Travis we set the browser to `Firefox` as `Chrome`
		 * isn't available there.
		 * If we even update this to be `PhantomJS2` make sure we remove the `Firefox`
		 * setup from `before_script` in the `.travis.yml` file.
		 */
		browsers: ['Chrome']
	};

	if (process.env.TRAVIS) {
		config.browsers = ['Firefox'];
	}

	karma.set(config);
};
