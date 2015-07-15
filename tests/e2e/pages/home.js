function homePage() {
  this.headerTextLocator = '#header';
  this.subtitleTextLocator = '#subtitle';
  this.homeLinknLocator = '#home';
  this.aboutLinkLocator = '#about';
  this.rabbitLinkLocator = '#rabbit';

  this.go = function() {
    browser.get('/');
  };

  this.goToAbout = function() {
    element(by.css(this.aboutLinkLocator)).click();
  };

  this.getCountOfPostMessages = function() {
    var allPosts = element.all(by.css(".marketing > .col-md-12"));
    return allPosts.count();
  };

  this.openPostMessage = function(messageId) {
    var domElement = element(by.css("a[href='#/post/" +messageId+ "']"));
    return domElement.click();
  };
}

module.exports = new homePage();
