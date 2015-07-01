angular.module('myApp.loginController', [])
	.controller('loginCtrl', function ($scope, $http, $location, $rootScope) {
		$scope.message = 'Login Below!'
	  $scope.user = {};

	  $scope.login = function() {
	  	$http({
	  		method: 'POST', 
	  		url: '/users/login',
	  		data: {
	  			username: $scope.user.username,
	  			password: $scope.user.password
	  		}
	  	}).
	  	success(function (data, status, headers, config){
	  		console.log('you logged in!')
	  		$location.path('/userHome')
	  		$rootScope.rootuser = data.username;
	  	}).
	  	error(function (data, status, headers, config) {
	  		console.log('you lose login')
	  	})
	  }
 })