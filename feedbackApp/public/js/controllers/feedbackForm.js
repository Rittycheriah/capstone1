angular.module('myApp.feedbackController', [])
	.controller('addFeedback', ['$scope', '$http', '$location', '$rootScope', 'currentPropertyService', 
     function ($scope, $http, $location, $rootScope, currentPropertyService) {
     // this MODULE is for any feedback received
     // regarding a call and it's results 
	  $scope.title = 'realTR@CKeR'
    $scope.getCurrentProp = currentPropertyService.getProperty();

	  $scope.addFeedback = function() {
	  	$http({
	  		method: 'POST', 
	  		url: '/feedback/add',
	  		data: {
	  		  name: $scope.feedback.name,
	  		  phone: $scope.feedback.phone,
	  		  status: $scope.feedback.status,
          property_id: $scope.getCurrentProp
	  		}
	  	})
      $location.path('userHome')
    }
 }])
 .controller('allFeedback', ['$scope', '$http', '$location', 'currentPropertyService',
  // this showing all feedback on a property
  // and all active properties for the app

   function ($scope, $http, $location, $rootScope, currentPropertyService) {
   $scope.title = 'realTr@CKeR';

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