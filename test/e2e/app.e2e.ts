/// <reference path="../../node_modules/angular2/typings/angular-protractor/angular-protractor" />
/// <reference path="../../node_modules/angular2/typings/jasmine/jasmine" />

import {App} from './app.page';

describe('App', () => {
	var page: App = new App();

	beforeEach(() => {
		browser.get('/');
	});

	it('should match page title', () => {
		var title = browser.getTitle();
		expect(title).toEqual('Angular 2 Seed');
	});

	it('should have a menu with items', () => {
		var todo = page.menu.get(0).getText(),
			about = page.menu.get(1).getText();

		expect(todo).toEqual('Todo');
		expect(about).toEqual('About');
	});
});
