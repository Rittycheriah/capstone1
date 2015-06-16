'use strict';

// Declare app level module which depends on filters, and services

var capMod = angular.module('myApp', [
              'ngRoute',
              'myApp.loginController',
              'myApp.registerController'
            ])

capMod.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.
    when('/register', {
      templateUrl: 'partials/register.jade',
      controller: 'registerCtrl'
    }).
    when('/login', {
      templateUrl: 'partials/login.jade',
      controller: 'loginCtrl'
    }).
    otherwise({
    	redirectTo: '/'
    });

});