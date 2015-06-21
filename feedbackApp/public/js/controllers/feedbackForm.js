angular.module('myApp.feedbackController', [])
	.controller('addFeedback', ['$scope', '$http', '$location', '$rootScope', 'currentPropertyService', 
      function ($scope, $http, $location, $rootScope, currentPropertyService) {
	  $scope.title = 'TR@CKeR'
     $scope.getCurrentProp = currentPropertyService.getProperty();

	  $scope.addFeedback = function() {
	  	$http({
	  		method: 'POST', 
	  		url: '/feedback/add',
	  		data: {
	  		  name: $scope.feedback.name,
	  		  phone: $scope.feedback.phone,
	  		  status: $scope.feedback.status,
           property_id: $scope.feedback.property_id
	  		}
	  	})
   }
 }])
 .controller('allFeedback', ['$scope', '$http', '$location', 'currentPropertyService',

   function ($scope, $http, $location, $rootScope, currentPropertyService) {
   $scope.title = 'All TR@CKeR';

   var getFeedback = function () {
   	$http({
   		method: 'GET',
   		url: '/property/allActive'
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


 }])