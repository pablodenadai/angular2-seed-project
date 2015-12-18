import {Dashboard} from './dashboard.page';

describe('Dashboard', function() {
	var page: Dashboard = new Dashboard();

	beforeEach(function() {
		browser.get('/dashboard');
	});

	it('should have a header', function() {
		var header = page.header.getText();
		expect(header).toEqual('Top Heroes');
	});
});
