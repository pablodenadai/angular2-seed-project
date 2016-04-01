# Angular 2 - Seed Project

[![Build Status](https://travis-ci.org/ghpabs/angular2-seed-project.svg?branch=master)](https://travis-ci.org/ghpabs/angular2-seed-project)
[![Join the chat at https://gitter.im/ghpabs/angular2-seed-project](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ghpabs/angular2-seed-project)

<img src="http://i.imgur.com/gM0tsOZ.png" width="250px">

## Stack
- [Gulp 4](http://gulpjs.com/)
- [Angular 2](https://angular.io/)
- [TypeScript](http://www.typescriptlang.org/)
- [Typings](https://github.com/typings/typings)
- [Sass](http://sass-lang.com/)
- [Karma](http://karma-runner.github.io/)
- [Protractor](http://www.protractortest.org/)

## Workflow Features
- **Gulp** fully automated workflow.
- **Development** and **production** environment targets.
- **Unit** and **E2E** test samples.
- **Code coverage** report with TypeScript mapping.
- **TypeScript** definition manager, linting, sourcemaps and transpilation (ES5).
- **Sass** linting, sourcemaps and transpilation.
- **TypeDoc** documentation generator.
- **Change Log** generated based on Git metadata.

## Angular 2 Features
- Directives
- Pipes
- Services
- Router
- REST API
- Template Cache
- Modular Components
- Dependency Injection
- Custom Events

## Global Dependencies

| Dependency | Version | Install                               |
| ---------- | ------- | ------------------------------------- |
| NodeJS     | 5.x.x   | [http://node.org](http://nodejs.org/) |
| npm        | 3.x.x   | [http://node.org](http://nodejs.org/) |
| Gulp CLI   | 0.4.x   | `npm install gulpjs/gulp-cli#4.0 -g`  |
| Typings    | 0.6.x   | `npm install typings -g`              |

## Install
```
$ git clone https://github.com/ghpabs/angular2-seed-project.git && cd angular2-seed-project
$ npm install
$ typings install
$ gulp build serve
```

Note: the `serve` task won't automatically launch the browser for you.
To view the app please open a new tab and go to `http://localhost:8080/`.

## Usage
### Tasks
- `$ gulp clean`: Remove generated folders - `build`, `docs` and `coverage`.
- `$ gulp unit`: Run Karma against all `src/scripts/**/*.spec.js` files.
- `$ gulp e2e`: Run Protractor against all `e2e/**/*.spec.js` files. The project must be being served before running end-to-end tests.
- `$ gulp build`: Create distribution package.
- `$ gulp serve`: Start web-server and live-reload.
- `$ gulp docs`: Generate documentation.
- `$ gulp changelog`: Generate `CHANGELOG.md` file from Git metadata. See [Change Log](#change-log) for more info.

### Environments
Default: `NODE_ENV=development` and `PORT=8080`.

#### Development:
- `$ gulp build serve` is equivalent to
`$ NODE_ENV=development PORT=8080 gulp build serve`.

#### Production
- `$ NODE_ENV=production gulp build serve`.

## Ecosystem
You might have noticed that we have quite a few files in our `root` folder. You might also be wondering why we need them and whether they are applicable to your use case. Here is a brief explanation:

- **.travis.yml**: Travis is our Continuos Integration (CI) server and this is its configuration file. We have added hooks to GitHub so automated tests will kick in after each commit.
- **karma.shim.js**: Unit testing Angular2 apps is still in its early days and this file helps us setup the test runner - Karma.

## Change Log
This project generates the `CHANGELOG.md` from Git metadata using the [conventional-changelog](https://github.com/ajoslin/conventional-changelog) library. The commit message must follow the [Angular conventions][angular-commit-message-format] for this feature to work.

### Recommended Workflow
- Make changes
- Commit those changes
- Make sure Travis turns green
- Bump version in `package.json`
- Run `gulp changelog`
- Commit `package.json` and `CHANGELOG.md` files
- Tag
- Push

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. When submitting a PR, make sure that the commit messages match the [Angular conventions][angular-commit-message-format].

## License
MIT

[angular-commit-message-format]: https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit-message-format
