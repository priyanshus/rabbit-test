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
    .controller('RabbitCtr', function ($scope, $http, PostService) {

      $scope.checkLogin = function() {
        var email = $scope.email;
        var password = $scope.password;
        $scope.loginStatus = PostService.validateLogin();
        console.log($scope.loginStatus);
      };
    });
