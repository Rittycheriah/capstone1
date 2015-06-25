angular.module('myApp.propertyController', [])
	.controller('propertyCtrl', function ($scope, $http, $location, $rootScope) {
	  $scope.title = 'TR@CKeR Properties';

    var getProps = function () {
    $http({
      method: 'GET',
      url: '/property/allProperties'
    }).
    success(function(data, status, headers, config) {
      console.log('got it!');
      $scope.units = data;
    }).
    error(function(data, status, headers, config) {
      console.log('cannot get list of properties');
    });
   };

   getProps();

	  $scope.addProperty = function() {
	  	$http({
	  		method: 'POST', 
	  		url: '/property/addProperty',
	  		data: {
	  			HouseNum: $scope.property.houseNumber,
	  			StreetName: $scope.property.street,
	  			City: $scope.property.city,
	  			State: $scope.property.state,
	  			Zip: $scope.property.zip, 
	  			Status: $scope.property.status 
	  		}
	  	})
	  }
 })
  .controller('showAllActivePropFeedback', function ($scope, $http, $location, $rootScope, currentPropertyService) {
  	$scope.title = 'TR@CKeR NEW HOME';

  	var getActiveProps = function () {
     	$http({
     		method: 'GET',
     		url: '/property/allActive'
     	}).
     	success(function(data, status, headers, config) {
     		console.log('got it!');
     		$scope.units = data;
     	}).
     	error(function(data, status, headers, config) {
     		console.log('cannot get list of properties');
     	});
   };

   var getDetailedFeedback = function (propId) {
     $http({
       method: 'GET', 
       url: '/feedback/details4OneProp/' + propId
     }).
     success(function(data, status, headers, config) {
      console.log('getting detailed feedback');
      $scope.details = data;
     }).
     error(function(data, status, headers, config) {
      console.log('cannot get list of detailed feedback');
     })
   };

   getActiveProps();

    $scope.showDets = false;

    $scope.changeDetsStatus = function (propId) {
      $scope.showDets = propId;
      getDetailedFeedback(propId);
      return
    }

    $scope.hideDetsAgain = function () {
      $scope.showDets = false;
      return
    }

    $scope.feedbackAdd = function (unitId) {
      console.log('Going to add feedback, here is the unit', unitId);
      currentPropertyService.setProperty(unitId);
      $location.path('addFeedback');
    }


  })