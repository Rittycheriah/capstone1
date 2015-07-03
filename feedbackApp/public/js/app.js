'use strict';

// Declare app level module which depends on filters, and services

var capMod = angular.module('myApp', [
              'ngRoute',
              'myApp.loginController',
              'myApp.logoutController',
              'myApp.registerController',
              'myApp.feedbackController',
              'myApp.propertyController',
              'myApp.postShowingController',
              'myApp.propertyService',
              'myApp.followUpStatusFilter',
              'myApp.graphsController' 
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
    when('/userHome', {
      templateUrl: 'partials/allFeedback.jade',
      controller: 'showAllActivePropFeedback'
    }).
      when('/addProperties', {
      templateUrl: 'partials/addNewProp.jade',
      controller: 'propertyCtrl'
    }).
      when('/addFeedback', {
      templateUrl: 'partials/addFeedback.jade',
      controller: 'addFeedback'
    }).
      when('/changeProperty', {
      templateUrl: 'partials/change2active.jade',
      controller: 'propertyCtrl'
    }).
      when('/postShowingFeedback', {
      templateUrl: 'partials/postShowingFeedback.jade',
      controller: 'postShowingFeedback'
    }).
      when('/viewGraph', {
      templateUrl: 'partials/propGraph', 
      controller: 'viewGraphs'
    }).
    otherwise({
    	redirectTo: '/login'
    });

});