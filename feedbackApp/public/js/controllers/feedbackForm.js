angular.module('myApp.feedbackController', [])
	.controller('mainCtrl', function ($scope, $http, $location, $rootScope) {
	  $scope.title = 'TR@CKeR'

	  $scope.addFeedback = function() {
	  	$http({
	  		method: 'POST', 
	  		url: '/feedback/add',
	  		data: {
	  		  name: $scope.feedback.name,
	  		  property: $scope.feedback.property,
	  		  phone: $scope.feedback.phone,
	  		  status: $scope.feedback.status
	  		}
	  	})
	  }
 })