angular.module('myApp.registerController', [])
	.controller('registerCtrl', function ($scope, $http, $location, $rootScope) {
		$scope.message = 'Register Below!'
	  $scope.user = {};

	  $scope.register = function() {
	  	$http({
	  		method: 'POST', 
	  		url: '/users/register',
	  		data: {
	  			username: $scope.user.username,
	  			password: $scope.user.password
	  		}
	  	})
	  }
 })