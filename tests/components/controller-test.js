describe('HomeCtr', function() {
    beforeEach(module('demoApp'));

    var $controller;

    beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
    }));

    describe('test', function() {
    it('test', function() {
      var $scope = {};
      console.log('Here');
      var controller = $controller('PasswordController', { $scope: $scope });
    });
  });
});
