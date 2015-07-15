var homePage = require('../pages/home.js');
var aboutPage = require('../pages/about.js');
var postPage = require('../pages/post.js');
var chai = require('chai');
var chaiWebdriver = require('chai-webdriver');
var chaiAsPromised = require("chai-as-promised");
var expect = chai.expect;
chai.use(chaiAsPromised);
chai.use(chaiWebdriver(browser));

describe('When user launches the APP', function() {
  it('Should be at correct URL', function() {
    homePage.go();
    expect(browser.getCurrentUrl()).to.eventually.equal('http://localhost:9010/#/home');
  });

  it('Should display correct header text', function() {
    expect(homePage.headerTextLocator).dom.to.have.text('Rabbit APP');
  });

  it('Should display subtitle text', function() {
    expect(homePage.subtitleTextLocator).dom.to.be.visible();
  });

  it('Should display navigational buttons', function() {
    expect(homePage.homeLinknLocator).dom.to.be.visible();
    expect(homePage.aboutLinkLocator).dom.to.be.visible();
    expect(homePage.rabbitLinkLocator).dom.to.be.visible();
  });

  it('Should display correct list of post messages', function() {
    expect(homePage.getCountOfPostMessages()).to.eventually.equal(100);
  });

  describe('When user opens the post message', function() {
    it('Should be at correct url', function(done) {
      homePage.openPostMessage(1)
      .then(function() {
        expect(browser.getCurrentUrl()).to.eventually.equal('http://localhost:9010/#/post/1');
        done();
      });
    });

    it('Should display post title & body', function() {
      expect(postPage.postTitleLocator).dom.to.be.visible();
      expect(postPage.postBodyLocator).dom.to.be.visible();
    });

    it('Should display comments section', function() {
      expect(postPage.commentsTextLocator).dom.to.be.visible();
    });

    it('Should display correct count of comments', function() {
      expect(postPage.getCountOfComments()).to.eventually.equal(5);
    })

    it('Should display comment title,body & email', function() {
      
    })
  });
});
