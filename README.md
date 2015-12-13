# Angular 2 - Seed Project

[![Build Status](https://travis-ci.org/ghpabs/angular2-seed.svg)](https://travis-ci.org/ghpabs/angular2-seed)
[![Join the chat at https://gitter.im/ghpabs/angular2-seed](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ghpabs/angular2-seed?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Light-weight and easy to use seed project for Angular 2 apps.

<p align="center">
  <img src="http://i.imgur.com/gM0tsOZ.png" width="250">
</p>

## Stack
- [Gulp 4](http://gulpjs.com/)
- [Angular 2](https://angular.io/)
- [TypeScript](http://www.typescriptlang.org/)
- [Sass](http://sass-lang.com/)
- [Karma](http://karma-runner.github.io/)
- [Protractor](http://www.protractortest.org/)

## Features
- **Gulp** fully automated workflow.
- **Development** and **production** environment targets.
- **Official** Angular 2 tutorial app implementation.
- **Unit** and **E2E** test samples.
- **Code coverage** report with TypeScript mapping.
- **TypeScript** linting, sourcemaps and transpilation (ES5).
- **Sass** linting, sourcemaps and transpilation.
- ~~**TypeDoc** documentation generator.~~ (Currently disabled. See issue [#26](https://github.com/ghpabs/angular2-seed/issues/26).)

## Install
```
$ git clone https://github.com/ghpabs/angular2-seed.git && cd angular2-seed
$ npm install
$ gulp build serve
```

Note: the `serve` task won't automatically launch the browser for you.
To view the app please open a new tab and go to `http://localhost:8080/`.

## Usage
### Tasks
- `$ gulp clean`: Remove generated folders - `build`, `docs` and `coverage`.
- `$ gulp unit`: Run `Karma` against all `test/unit/*.spec.js` files. The project must have been previously built as test are ran against the `.js` transpiled files.
- `$ gulp e2e`: Run `Protractor` against all `test/e2e/*.e2e.js` files. The project must be being served before running end-to-end tests.
- `$ gulp build`: Create distribution package. See environment `targets` below.
- `$ gulp serve`: Start web-server and live-reload. See environment `targets` below.

### Targets
Use `--dev` and `--prod` modifiers for development and production targets where `--dev` is the default modifier.

- `$ gulp build serve` is equivalent to `$ gulp build serve --dev`.
- `$ gulp build serve --prod`.

## Ecosystem
You might have noticed that we have quite a few files in our `root` folder. You might also be wondering why we need them and whether they are applicable to your use case. Here is a brief explanation:

- **.travis.yml**: Travis is our Continuos Integration (CI) server and this is its configuration file. We have added hooks to GitHub so automated tests will kick in after each commit.
- **deploy.sh**: This file enable us to deploy our application after every successful build in the CI server.
- **karma.shim.js**: Unit testing Angular2 apps is still in its early days and this file helps us setup the test runner - Karma.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. When submitting a PR, make sure that the commit messages match the [Angular conventions](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit-message-format).

## License
MIT
