'use strict';

process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
process.env.PORT = process.env.PORT ? process.env.PORT : '8080';

let baseLibs = [
	'node_modules/systemjs/dist/system-polyfills.js',
	'node_modules/systemjs/dist/system.js',
	'node_modules/es6-shim/es6-shim.js',
	'node_modules/rxjs/bundles/Rx.js',
	'node_modules/angular2/bundles/angular2-polyfills.js',
	'node_modules/angular2/bundles/angular2.dev.js',
	'node_modules/angular2/bundles/router.dev.js',
	'node_modules/angular2/bundles/http.dev.js',
	'node_modules/lodash/index.js'
];

var paths = {
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
	},

	test: {
		libs: {
			js: [
				...baseLibs,
				'node_modules/angular2/bundles/testing.dev.js',
				'karma.shim.js'
			]
		}
	}
};

module.exports = {
	NODE_ENV: process.env.NODE_ENV,
	PORT: process.env.PORT,

	get isDev() { return this.NODE_ENV === 'development'; },
	get isProd() { return this.NODE_ENV === 'production'; },

	get paths() { return this.isDev ? paths.dev : paths.prod; },

	test: paths.test,
	typings: paths.typings
};
