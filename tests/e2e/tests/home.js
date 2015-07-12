var homePage = require('../pages/home.js');
var aboutPage = require('../pages/about.js');
var chai = require('chai');
var chaiWebdriver = require('chai-webdriver');
chai.use(chaiWebdriver(browser));
var expect = chai.expect;

describe('When user launches the APP', function() {
  it('should be at correct URL', function() {
    homePage.go();
    expect(homePage.headerTextLocator).dom.to.have.text('Rabbit APP');
    expect(homePage.homeButtonLocator).dom.to.have.attribute('class', 'active');
  });

  it('should redirect to /about page', function() {
    homePage.goToAbout();
    expect(aboutPage.aboutButtonLocator).dom.to.have.htmlClass('active');
  });
});
