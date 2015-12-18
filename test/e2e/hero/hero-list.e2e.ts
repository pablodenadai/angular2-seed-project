import {HeroList} from './hero-list.page';

describe('HeroList', () => {
	var page: HeroList = new HeroList();

	beforeEach(() => {
		browser.get('/heroes');
	});

	it('should have a header', () => {
		var header = page.header.getText();
		expect(header).toEqual('All Heroes');
	});
});
