'use strict';

process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
process.env.PORT = process.env.PORT ? process.env.PORT : '8080';

let baseLibs = [
	'node_modules/systemjs/dist/system-polyfills.js',
	'node_modules/systemjs/dist/system.js',
	'node_modules/es6-shim/es6-shim.js',
	'node_modules/rxjs/bundles/Rx.js',
	'node_modules/zone.js/dist/zone.js',
	'node_modules/reflect-metadata/Reflect.js',
	// 'node_modules/@angular/**/*.js',

	'node_modules/lodash/index.js'
];

var paths = {
	typings: [
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
				'node_modules/zone.js/dist/jasmine-patch.js',
	      'node_modules/zone.js/dist/async-test.js',
	      'node_modules/zone.js/dist/fake-async-test.js',
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
