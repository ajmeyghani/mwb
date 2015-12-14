describe('The page title', function () {
  beforeEach(function() {
    isAngularSite(false);
  });
  it('should be correct', function () {
    browser.get('http://localhost:8051');
    expect(browser.getTitle()).toBe('Minimal Webpack Boilerplate');
  });
});
