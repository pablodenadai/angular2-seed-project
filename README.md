# Angular 2 - Seed Project
> Light-weight and easy to use seed project for Angular 2 app development.

```
Angular 2 is still in alpha and it shouldn't be used in production.
```

## Stack
- Angular 2
- TypeScript
- Gulp 4
- Unit Testing: Karma -> Jasmine
- E2E Testing: Protractor

## Features
- Fully automated development workflow using Gulp.
- Modular project structure.
- Unit and E2E test samples.
- Code-coverage with TypeScript mapping.
- TypeScript support - Code linting, sourcemaps and transpilation to JS ES5.
- LESS support - Code linting, sourcemaps and transpilation to CSS.
- Watcher and live-reload support.
- TypeDoc documentation generator.
- Development and production environment targets.

## Install
```
$ npm install
$ gulp build serve
```

## Usage
### Tasks
- `$ gulp clean`: Remove generated folders - `build`, `docs` and `coverage`.
- `$ gulp unit`: Run `Karma` against all `test/unit/*.spec.js` files. The project must have been previously built as test are ran against the `.js` transpiled files.
- `$ gulp e2e`: Run `Protractor` against all `test/e2e/*.e2e.js` files. The project must be being served before running end-to-end tests.
- `$ gulp build`: Create distribution package. See environment `targets` below.
- `$ gulp serve`: Starts webserver and live-reload. See environment `targets` below.

### Targets
Use `--dev` and `--prod` modifiers for development and production targets where `--dev` is the default modifier.

- `$ gulp build serve` is equivalent to `$ gulp build serve --dev`.
- `$ gulp build serve --prod`.
- `$ gulp unit` is equivalent to `$ gulp unit --dev`.
- `$ gulp unit --prod`.
