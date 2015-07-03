angular.module('myApp.postShowingController', [])
  	.controller('postShowingFeedback', 
  		['$scope', 
  		'$http', 
  		'$location', 
  		'$rootScope',
  		'currentPropertyService', 
      
      function ($scope, $http, $location, $rootScope, currentPropertyService) {
	      $scope.getCurrentProp = currentPropertyService.getProperty();

	      $scope.title = 'realTr@cker';
	      $scope.addPostShowFeedback = function() {
			  	$http({
			  		method: 'POST', 
			  		url: '/feedback/addPostShow',
			  		data: {
			  		  name: $scope.showingPros.name,
			  		  phone: $scope.showingPros.phone,
			  		  status: 'gave feedback',
			  		  responseAfterShowing: $scope.showingPros.comments,
		          property_id: $scope.getCurrentProp
			  		}
			  	})
		      $location.path('userHome')
        }

 }])
