require('reflect-metadata');

exports.config = {
	framework: 'jasmine2',
	baseUrl: 'http://localhost:8080/',

	capabilities: {
		'browserName': 'chrome',
		'chromeOptions': {
			'args': ['show-fps-counter=true']
		}
	},
	directConnect: true,

	allScriptsTimeout: 110000,
	getPageTimeout: 100000,
	jasmineNodeOpts: {
		isVerbose: false,
		showColors: true,
		includeStackTrace: false,
		defaultTimeoutInterval: 400000
	},

	/**
	 * Angular2 related configuration
	 * `useAllAngular2AppRoots` tells Protractor to wait for any Angular 2 apps
	 * on the page instead of just the one matching `rootEl`
	 */
	useAllAngular2AppRoots: true
};
