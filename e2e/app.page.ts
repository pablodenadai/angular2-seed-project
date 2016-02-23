/**
 * Please keep in mind that currently not all locator strategies are supported
 * for ng2 apps. Things like `by.model()` or `by.binding()` are not working
 * just yet. Check the Protractor changelog for new releases.
 * https://github.com/angular/protractor/blob/master/CHANGELOG.md
 */

export class App {
	menu = element.all(by.tagName('ul')).all(by.tagName('a'));
}
