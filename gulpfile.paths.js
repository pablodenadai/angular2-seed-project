'use strict';

let baseLibs = [
	'node_modules/systemjs/dist/system.js',
	'node_modules/es6-shim/es6-shim.js',
	'node_modules/rxjs/bundles/Rx.js',
	'node_modules/angular2/bundles/angular2-polyfills.js',
	'node_modules/angular2/bundles/angular2.dev.js',
	'node_modules/angular2/bundles/router.dev.js',
	'node_modules/angular2/bundles/http.dev.js',
	'node_modules/lodash/index.js'
];

module.exports = {
	typings: [
		'node_modules/angular2/typings/browser.d.ts',
		'typings/main.d.ts'
	],

	dev: {
		libs: {
			js: [
				...baseLibs
				// Add dev only libs here - eg 'node_modules/debug-lib/index.js'
			]
		}
	},

	prod: {
		libs: {
			js: [
				...baseLibs
				// Add prod only libs here - eg 'node_modules/analytics-lib/index.js'
			]
		}
	}
};
