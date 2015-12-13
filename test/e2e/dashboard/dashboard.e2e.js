var DashboardPage = require('./dashboard.page.js');

describe('Dashboard', function() {
  var page = new DashboardPage();

  beforeEach(function() {
      browser.get('/dashboard');
  });

  it('should have a header', function() {
    var header = page.header.getText();
    expect(header).toEqual('Top Heroes');
  });
});
