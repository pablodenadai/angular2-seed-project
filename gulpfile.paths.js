module.exports = {
	dev: {
		libs: {
			js: [
				'node_modules/systemjs/dist/system.js',
				'node_modules/es6-shim/es6-shim.js',
				'node_modules/rxjs/bundles/Rx.js',
				'node_modules/angular2/bundles/angular2-polyfills.js',
				'node_modules/angular2/bundles/angular2.dev.js',
				'node_modules/angular2/bundles/router.dev.js',
				'node_modules/angular2/bundles/http.dev.js'
			]
		}
	},

	prod: {
		libs: {
			js: [
				'node_modules/systemjs/dist/system.js',
				'node_modules/es6-shim/es6-shim.min.js',
				'node_modules/rxjs/bundles/Rx.min.js',
				'node_modules/angular2/bundles/angular2-polyfills.min.js',
				'node_modules/angular2/bundles/angular2.min.js',
				'node_modules/angular2/bundles/router.min.js',
				'node_modules/angular2/bundles/http.min.js'
			]
		}
	}
};
