'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'index.jade',
      controller: 'loginCtrl'
    }).
    when('/register', {
      templateUrl: 'partials/register.jade',
      controller: 'registerCtrl'
    }) 
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});