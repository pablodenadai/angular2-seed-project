var HeroListPage = require('./hero-list.page.js');

describe('HeroList', function() {
  var page = new HeroListPage();

  beforeEach(function() {
      browser.get('/heroes');
  });

  it('should have a header', function() {
    var header = page.header.getText();
    expect(header).toEqual('All Heroes');
  });
});
