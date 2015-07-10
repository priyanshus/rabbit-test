angular.module('demoApp')
    .controller('HomeCtr', function ($scope, $state, PostService) {
        $scope.posts = [];

        PostService.getAllPosts()
            .success(function (posts) {
                $scope.posts = posts;
            });
    })
    .controller('ViewCtr', function ($scope, $state, $stateParams, PostService) {
        $scope.post = {};
        $scope.comments = [];

        PostService.getPost($stateParams.postId)
            .success(function (post) {
                $scope.post = post;
            });

        PostService.getPostComments($stateParams.postId)
            .success(function (comments) {
                $scope.comments = comments;
            });
    })
    .controller('RabbitCtr',['$scope', '$location','PostService', function ($scope, $location, PostService) {

      $scope.checkLogin = function() {
        var username = $scope.username;
        var password = $scope.password;
        var loginStatus = PostService.validateLogin(username,password);
        if(loginStatus == true) {
          console.log('Im here');
          $location.url() = '/rabbits-home';
          console.log('Im done');
        }
      };
    }]);
