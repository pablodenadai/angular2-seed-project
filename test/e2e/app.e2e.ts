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
		expect(title).toEqual('Angular2 Seed');
	});

	it('should have an app header', () => {
		var header = page.header.getText();
		expect(header).toEqual('Tour of Heroes');
	});
});
