function postPage() {
  this.commentsTextLocator = '.panel-heading';
  this.postTitleLocator = '#posttitle';
  this.postBodyLocator = '#postbody';

  this.go = function() {
    browser.get('/');
  };

  this.getCountOfComments = function() {
    var allComments = element.all(by.repeater("comment in comments"));
    return allComments.count();
  };

  this.getCommentTitle = function(index) {
    var comment = element.all(by.repeater("comment in comments")).get(index);
    return comment;
  }
}

module.exports = new postPage();
