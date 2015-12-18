import {HeroList} from './hero-list.page';

describe('HeroList', function() {
	var page: HeroList = new HeroList();

	beforeEach(function() {
		browser.get('/heroes');
	});

	it('should have a header', function() {
		var header = page.header.getText();
		expect(header).toEqual('All Heroes');
	});
});
