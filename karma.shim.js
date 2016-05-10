/**
* This setup is based on Julie Ralph's `ng2-test-seed` project.
* See https://github.com/juliemr/ng2-test-seed
* Hopefully Angular2 and Karma integration will be more seamless in the future.
* Unit tests are currently only implemented to run against the development target.
*/

/** Tun on full stack traces in errors to help debugging */
Error.stackTraceLimit = Infinity;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

/**
* Cancel Karma's synchronous start,
* we will call `__karma__.start()` later, once all the specs are loaded.
*/
__karma__.loaded = function() {};

System.config({
  map: {
    'rxjs': 'base/node_modules/rxjs',
    '@angular': 'base/node_modules/@angular'
  },
  packages: {
    '@angular/core': { main: 'index.js' },
    '@angular/compiler': { main: 'index.js' },
    '@angular/common': { main: 'index.js' },
    '@angular/platform-browser': { main: 'index.js' },
    '@angular/platform-browser-dynamic': { main: 'index.js' },
    '@angular/router-deprecated': { main: 'index.js' },
    '@angular/http': { main: 'index.js' },
    'rxjs': {},
    'base/.karma': {
      format: 'register',
      map: Object.keys(window.__karma__.files)
        .filter(onlyAppFiles)
        .reduce(function(pathsMapping, appPath) {
          /**
          * Creates local module name mapping to global path with karma's fingerprint in path, e.g.:
          * './hero.service': '/base/build/js/hero.service.js?f4523daf879cfb7310ef6242682ccf10b2041b3e'
          */
          var moduleName = appPath
          .replace(/^\/base\/.karma\//, './')
          .replace(/\.js$/, '');

          pathsMapping[moduleName] = appPath + '?' + window.__karma__.files[appPath]
          return pathsMapping;
        }, {})
    }
  }
});

Promise.all([
  System.import('@angular/core/testing'),
  System.import('@angular/platform-browser-dynamic/testing')
]).then(function(providers) {
  var testing = providers[0];
  var testingBrowser = providers[1];

  testing.setBaseTestProviders(
    testingBrowser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
    testingBrowser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
  );
}).then(function() {
  return Promise.all(
    Object.keys(window.__karma__.files) // All files served by Karma.
    .filter(onlySpecFiles)
    .map(function(moduleName) {
      /** Loads all spec files via their global module names (e.g. 'base/src/app/hero.service.spec') */
      return System.import(moduleName);
    }));
  }).then(__karma__.start, __karma__.error);

  function onlyAppFiles(filePath) {
    return /^\/base\/.karma\/.*\.js$/.test(filePath);
  }

  function onlySpecFiles(path) {
    return /.spec\.js$/.test(path);
  }
