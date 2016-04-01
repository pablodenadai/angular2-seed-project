<a name="1.1.1"></a>
## [1.1.1](https://github.com/ghpabs/angular2-seed/compare/v1.1.0...v1.1.1) (2016-04-01)


### Bug Fixes

* **build:** explicitly exclude *.spec.ts files from glob when not needed ([cb75a2c](https://github.com/ghpabs/angular2-seed/commit/cb75a2c))
* Karma needs to have plugins defined ([3d1261b](https://github.com/ghpabs/angular2-seed/commit/3d1261b)), closes [#66](https://github.com/ghpabs/angular2-seed/issues/66)
* Some files have bad carriage return ([e9fc1fa](https://github.com/ghpabs/angular2-seed/commit/e9fc1fa)), closes [#68](https://github.com/ghpabs/angular2-seed/issues/68)
* Update the doc and remove useless dependency ([b0e4a7f](https://github.com/ghpabs/angular2-seed/commit/b0e4a7f)), closes [#66](https://github.com/ghpabs/angular2-seed/issues/66)
* **unit:** add missing karma plugins and phantomjs as devDep instead of global ([2c77fd1](https://github.com/ghpabs/angular2-seed/commit/2c77fd1))

### Features

* **build:** split gulp tasks into partial files ([dd571c3](https://github.com/ghpabs/angular2-seed/commit/dd571c3))
* **build:** upgrade to angular 2.0.0-beta.6 ([e45443c](https://github.com/ghpabs/angular2-seed/commit/e45443c))
* **github:** add issue and pr templates ([e2d2c58](https://github.com/ghpabs/angular2-seed/commit/e2d2c58))
* **github:** create .github folder and move CONTRIBUTING.md file ([1ae4e1f](https://github.com/ghpabs/angular2-seed/commit/1ae4e1f))
* **gulp:** implement gulp assets watcher ([02ba795](https://github.com/ghpabs/angular2-seed/commit/02ba795))
* **test:** move unit tests to src folder and e2e test to root level ([a83d9b6](https://github.com/ghpabs/angular2-seed/commit/a83d9b6)), closes [#58](https://github.com/ghpabs/angular2-seed/issues/58)

### Reverts

* **assets:** revert fonts and images back to original eol format ([51c797a](https://github.com/ghpabs/angular2-seed/commit/51c797a))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/ghpabs/angular2-seed/compare/v1.0.1...v1.1.0) (2016-01-07)


### Features

* **build:** enable component template relative path ([750aa73](https://github.com/ghpabs/angular2-seed/commit/750aa73))
* **build:** implement type definition manager for TypeScript ([9214cf7](https://github.com/ghpabs/angular2-seed/commit/9214cf7))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/ghpabs/angular2-seed/compare/v1.0.0...v1.0.1) (2016-01-04)


### Features

* **unit:** update karma browser to phantomjs2 instead of chrome ([330301f](https://github.com/ghpabs/angular2-seed/commit/330301f))
* implement commit-msg validation hook and automated changelog ([be8d005](https://github.com/ghpabs/angular2-seed/commit/be8d005))



<a name="1.0.0"></a>
# 1.0.0 (2016-01-04)


### Bug Fixes

* Add meta to support responsive views + support IE8 with Shim and Respond ([1923861](https://github.com/ghpabs/angular2-seed/commit/1923861))
* e2e test update element selector and app title assertion ([3e1f992](https://github.com/ghpabs/angular2-seed/commit/3e1f992))
* html/body tags scss nesting ([07cf16d](https://github.com/ghpabs/angular2-seed/commit/07cf16d))
* html/body tags scss nesting ([35e4dc8](https://github.com/ghpabs/angular2-seed/commit/35e4dc8))
* relative paths in index.html ([30fbe49](https://github.com/ghpabs/angular2-seed/commit/30fbe49))
* **app:** implement es6-shim ([f2f6d51](https://github.com/ghpabs/angular2-seed/commit/f2f6d51))
* **app:** remove slice in ngFor ([5d50758](https://github.com/ghpabs/angular2-seed/commit/5d50758))
* relative paths in index.html ([0a79548](https://github.com/ghpabs/angular2-seed/commit/0a79548))
* **app:** set /todo as default route ([aee0e5d](https://github.com/ghpabs/angular2-seed/commit/aee0e5d))
* **dep:** fix tslint version ([0c75bbb](https://github.com/ghpabs/angular2-seed/commit/0c75bbb))
* **deps:** fix karma dependencies ([c431267](https://github.com/ghpabs/angular2-seed/commit/c431267))
* **e2e:** update e2e assertions ([fc31a2e](https://github.com/ghpabs/angular2-seed/commit/fc31a2e))
* syntax error ([9df2acb](https://github.com/ghpabs/angular2-seed/commit/9df2acb))
* **git:** add /.protractor to .gitignore ([3203d18](https://github.com/ghpabs/angular2-seed/commit/3203d18))
* **gulp:** add /.protractor folder to clean task ([bd1a8c1](https://github.com/ghpabs/angular2-seed/commit/bd1a8c1))
* Remove gulp-recess module ([8563cc9](https://github.com/ghpabs/angular2-seed/commit/8563cc9))
* **gulp:** update selenium webdriver before e2e are executed ([af08890](https://github.com/ghpabs/angular2-seed/commit/af08890))
* **rest:** remove http: scheme from rest api url ([6af83df](https://github.com/ghpabs/angular2-seed/commit/6af83df))
* **travis:** add support for Firefox ([f2d7f39](https://github.com/ghpabs/angular2-seed/commit/f2d7f39))
* **unit:** set default  browser to  instead of ([3967dcf](https://github.com/ghpabs/angular2-seed/commit/3967dcf))
* Remove respond.js ([f43c423](https://github.com/ghpabs/angular2-seed/commit/f43c423)), closes [ghpabs/angular2-seed#19](https://github.com/ghpabs/angular2-seed/issues/19)
* **unit:** todo id should be greater than -1 ([4bb9ed4](https://github.com/ghpabs/angular2-seed/commit/4bb9ed4))
* remove unused html5shiv lib ([e68e41a](https://github.com/ghpabs/angular2-seed/commit/e68e41a))
* replace CRLF with LF in .scss files ([8b694b9](https://github.com/ghpabs/angular2-seed/commit/8b694b9)), closes [#38](https://github.com/ghpabs/angular2-seed/issues/38)
* Tests after changing directory structure ([0f38764](https://github.com/ghpabs/angular2-seed/commit/0f38764))

### Features

* add dashboard and hero-list e2e test ([1e4ede3](https://github.com/ghpabs/angular2-seed/commit/1e4ede3)), closes [#29](https://github.com/ghpabs/angular2-seed/issues/29)
* Add scss linting ([9cce7a6](https://github.com/ghpabs/angular2-seed/commit/9cce7a6)), closes [ghpabs/angular2-seed#12](https://github.com/ghpabs/angular2-seed/issues/12)
* Expand app to use more Angular 2 features ([0de9e35](https://github.com/ghpabs/angular2-seed/commit/0de9e35)), closes [#14](https://github.com/ghpabs/angular2-seed/issues/14)
* implement assets copy tasks ([b840563](https://github.com/ghpabs/angular2-seed/commit/b840563))
* implement Bootstrap v4 alpha UI framework ([19dd02b](https://github.com/ghpabs/angular2-seed/commit/19dd02b)), closes [#20](https://github.com/ghpabs/angular2-seed/issues/20)
* **gulp:** implement standard process.env.NODE_ENV and PORT variables ([cd53674](https://github.com/ghpabs/angular2-seed/commit/cd53674)), closes [#44](https://github.com/ghpabs/angular2-seed/issues/44)
* implement connect-history plugin for html5 routing support ([9676824](https://github.com/ghpabs/angular2-seed/commit/9676824))
* implement connect-history plugin for html5 routing support ([12d7f0e](https://github.com/ghpabs/angular2-seed/commit/12d7f0e))
* **app:** basic restful todo implementation ([345fa33](https://github.com/ghpabs/angular2-seed/commit/345fa33))
* **app:** implement router ([d7f98ef](https://github.com/ghpabs/angular2-seed/commit/d7f98ef))
* **app:** implement sample directive ([63a71c0](https://github.com/ghpabs/angular2-seed/commit/63a71c0))
* **app:** implement truncate pipe ([74d01ca](https://github.com/ghpabs/angular2-seed/commit/74d01ca))
* **app:** polish up rest services ([5fe18a2](https://github.com/ghpabs/angular2-seed/commit/5fe18a2)), closes [#43](https://github.com/ghpabs/angular2-seed/issues/43)
* **app:** use locally sourced logo ([1b256cb](https://github.com/ghpabs/angular2-seed/commit/1b256cb))
* **deps:** upgrade deps to angular 2.0.0-alpha.54 ([cc9c2dd](https://github.com/ghpabs/angular2-seed/commit/cc9c2dd))
* **deps:** upgrade to angular 2.0.0-beta.0 and run enableProdMode if prod ([066a8c1](https://github.com/ghpabs/angular2-seed/commit/066a8c1))
* **e2e:** add typescript support for e2e tests ([23705b1](https://github.com/ghpabs/angular2-seed/commit/23705b1))
* **e2e:** standardize ts module loading ([3fc01b1](https://github.com/ghpabs/angular2-seed/commit/3fc01b1))
* **feat:** implement gh-pages deployment after success build in master ([304703b](https://github.com/ghpabs/angular2-seed/commit/304703b))
* **unit:** add todo service unit test ([5d5ce84](https://github.com/ghpabs/angular2-seed/commit/5d5ce84))
* **unit:** add todo unit test ([d1e5769](https://github.com/ghpabs/angular2-seed/commit/d1e5769))
* **unit:** add truncate pipe unit test ([d584ab7](https://github.com/ghpabs/angular2-seed/commit/d584ab7))
* **unit:** add typescript support for unit tests ([9cac049](https://github.com/ghpabs/angular2-seed/commit/9cac049))
* **unit:** update Karma browser to Firefox when running in Travis ([13439b8](https://github.com/ghpabs/angular2-seed/commit/13439b8))
* **unit:** update karma browser to phantomjs2 instead of chrome ([330301f](https://github.com/ghpabs/angular2-seed/commit/330301f))
* implement heroes image ([2cababf](https://github.com/ghpabs/angular2-seed/commit/2cababf))
* implement inline styleUrls and templateUrl ([f4543fe](https://github.com/ghpabs/angular2-seed/commit/f4543fe)), closes [#40](https://github.com/ghpabs/angular2-seed/issues/40)
* implement sample fonts ([b766134](https://github.com/ghpabs/angular2-seed/commit/b766134))
* implement todo and about components ([731e93f](https://github.com/ghpabs/angular2-seed/commit/731e93f))
* implement todo completed styling ([58d2fdb](https://github.com/ghpabs/angular2-seed/commit/58d2fdb))
* improve protrator setup and specs ([6b76552](https://github.com/ghpabs/angular2-seed/commit/6b76552))
* reinstate typedoc task ([2f31d4c](https://github.com/ghpabs/angular2-seed/commit/2f31d4c))
* Sass instead of Less ([bddd923](https://github.com/ghpabs/angular2-seed/commit/bddd923))

### Performance Improvements

* reduce image res and display size report in build task ([be71d59](https://github.com/ghpabs/angular2-seed/commit/be71d59))

### Reverts

* **travis:** put browser config back in ([1a4079a](https://github.com/ghpabs/angular2-seed/commit/1a4079a))



