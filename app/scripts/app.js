'use strict';

var app = angular.module('page2vieApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
]);


app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
          templateUrl: 'views/posts.html',
          controller: 'PostsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
});
