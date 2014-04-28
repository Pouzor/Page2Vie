'use strict';

app.controller('PostsCtrl', function ($scope, Post) {
    $scope.posts = Post.get();

    $scope.post = {url: 'http://', title: ''};

    $scope.submitPost = function () {
        Post.save($scope.post, function (ref) {
            $scope.posts = Post.get();
            $scope.post = {url: 'http://', title: ''};
        });
    };

    $scope.deletePost = function (postId) {
        Post.deleteP({id: postId}, function () {
            $scope.posts = Post.get();
        });
    };
});