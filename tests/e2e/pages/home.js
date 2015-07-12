function homePage() {
  this.headerTextLocator = '#header',
  this.homeButtonLocator = '#home',
  this.aboutLinkLocator = '#about',

  this.go = function() {
    browser.get('/');
  };

  this.goToAbout = function() {
    element(by.css(this.aboutLinkLocator)).click();
    browser.waitForAngular();
  }
}

module.exports = new homePage();
