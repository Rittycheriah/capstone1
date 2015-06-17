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
 .controller('allFeedback', function ($scope, $http, $location, $rootScope) {
   $scope.title = 'All TR@CKeR'

   var getFeedback = function () {
   	$http({
   		method: 'GET',
   		url: '/feedback/all'
   	}).
   	success(function(data, status, headers, config) {
   		console.log('got it!');
   		$scope.comments = data;
   	}).
   	error(function(data, status, headers, config) {
   		console.log('cannot get list');
   	});
   };

   getFeedback();
 })