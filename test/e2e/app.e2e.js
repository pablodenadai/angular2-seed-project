var AppPage = require('./app.page.js');

describe('App', function() {
  var page = new AppPage();

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
