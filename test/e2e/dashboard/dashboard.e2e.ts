import {Dashboard} from './dashboard.page';

describe('Dashboard', () => {
	var page: Dashboard = new Dashboard();

	beforeEach(() => {
		browser.get('/dashboard');
	});

	it('should have a header', () => {
		var header = page.header.getText();
		expect(header).toEqual('Top Heroes');
	});
});
