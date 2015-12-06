module.exports = {
	dev: {
		// Files to be included in the `index.html`.
		includes: [
			'build/lib/system.js',
			'build/lib/angular2.dev.js',
			'build/css/main.css'
		],

		// Files to be processed by Gulp.
		libs: {
			js: [
				'node_modules/systemjs/dist/system.js',
				'node_modules/angular2/bundles/angular2.dev.js'
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
				'node_modules/angular2/bundles/angular2.min.js'
			]
		}
	}
};
