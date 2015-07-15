var should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    api = supertest('http://jsonplaceholder.typicode.com');

describe('/posts', function() {
  it('should return 200 status code', function(done) {
    api.get('/posts')
    .expect(200,done);
  });

  it('should contain correct count', function(done) {
    api.get('/posts')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(error,response) {
      expect(response.body).to.have.length(100);
      done();
    });
  });

  it('should contain correct properties', function(done) {
    api.get('/posts')
    .end(function(error,response) {
      for(userId in response.body) {
        expect(response.body[userId].userId).to.not.equal(null);
        expect(response.body[userId].id).to.not.equal(null);
        expect(response.body[userId].title).to.not.equal(null);
        expect(response.body[userId].body).to.not.equal(null);
      }
      done();
    });
  });
});
