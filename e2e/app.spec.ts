import {it, describe, expect, beforeEach} from 'angular2/testing';

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
