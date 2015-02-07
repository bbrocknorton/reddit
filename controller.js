var app = angular.module('reddit');
app.controller('PostController', function($scope) {
    $scope.test = 'Welcome to Reddit!'
    $scope.posts = [];
    $scope.addPost = function() {

        $scope.newPost.timestamp = Date.now();
        $scope.newPost.karma = 0;
        $scope.newPost.comments = [];
        console.log($scope.newPost);
        $scope.posts.push($scope.newPost)
        $scope.reset();
    }

    $scope.reset = function() {
        $scope.newPost = {};
    }

});