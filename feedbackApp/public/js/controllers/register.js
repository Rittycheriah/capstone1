angular.module('myApp.registerController', [])
	.controller('registerCtrl', function ($scope, $http, $location, $rootScope) {
		$scope.message = 'Register Below!'
		$scope.message2 = 'realTr@acker Registry'
	  $scope.user = {};

	  $scope.register = function() {
	  	$http({
	  		method: 'POST', 
	  		url: '/users/register',
	  		data: {
	  			username: $scope.user.username,
	  			password: $scope.user.password
	  		}
	  	}).
	  	success(function (data, status, headers, config){
	  		console.log('you registered!')
	  		$location.path('/login')
	  		$rootScope.rootuser = data.username;
	  	}).
	  	error(function (data, status, headers, config) {
	  		console.log('you lose register')
	  	})
	  }
 })