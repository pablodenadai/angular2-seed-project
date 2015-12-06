var SamplePage = require('./sample.page.js');

describe('Protractor Demo App', function() {
	var page = new SamplePage();

	it('should have a title', function() {
		browser.get('http://localhost:8080/');

		expect(page.header.getText()).toEqual('Todo');
	});
});
