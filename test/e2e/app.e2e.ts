/// <reference path="../../node_modules/angular2/typings/angular-protractor/angular-protractor" />
/// <reference path="../../node_modules/angular2/typings/jasmine/jasmine" />

import {App} from './app.page';

describe('App', function() {
	var page: App = new App();

	beforeEach(function() {
		browser.get('/');
	});

	it('should match page title', function(){
		var title = browser.getTitle();
		expect(title).toEqual('Angular2 Seed');
	})

	it('should have an app header', function() {
		var header = page.header.getText();
		expect(header).toEqual('Tour of Heroes');
	});
});
