describe('Sample', function () {
  beforeEach(function() {
    isAngularSite(false);
  });
  it('should', function () {
    browser.get('http://localhost:8051');
    expect(browser.getTitle()).toBe('Boilerplate2');
  });
});
