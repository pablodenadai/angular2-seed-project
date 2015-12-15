module.exports = {
	dev: {
		// Files to be included in the `index.html`.
		includes: [
			'build/lib/system.js',
			'build/lib/Rx.js',
			'build/lib/angular2-polyfills.js',
			'build/lib/angular2.dev.js',
			'build/lib/router.dev.js',

			'build/css/app.css'
		],

		// Files to be processed by Gulp.
		libs: {
			js: [
				'node_modules/systemjs/dist/system.js',
				'node_modules/rxjs/bundles/Rx.js',
				'node_modules/angular2/bundles/angular2-polyfills.js',
				'node_modules/angular2/bundles/angular2.dev.js',
				'node_modules/angular2/bundles/router.dev.js'
			]
		}
	},

	prod: {
		// Files to be included in the `index.html`.
		includes: [
			'build/lib/*',
			'build/css/*'
		],

		// Files to be processed by Gulp.
		libs: {
			js: [
				'node_modules/systemjs/dist/system.js',
				'node_modules/rxjs/bundles/Rx.min.js',
				'node_modules/angular2/bundles/angular2-polyfills.min.js',
				'node_modules/angular2/bundles/angular2.min.js',
				'node_modules/angular2/bundles/router.min.js'
			]
		}
	}
};
