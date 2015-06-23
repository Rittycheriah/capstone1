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

   getActiveProps();

    $scope.feedbackAdd = function (unitId) {
      console.log('Going to add feedback, here is the unit', unitId);
      currentPropertyService.setProperty(unitId);
      $location.path('addFeedback');
      
      // $http({
      //   method: 'POST', 
      //   url: '/property/' + unitId
      // }).
      //    success(function(data, status, headers, config) {
      //    console.log('Here is what data looks like', data);
      //    // $scope.units = data[0];
      //    $location.path('addFeedback');
      //    console.log('***** SET PROPERTY FOR FEEDBACK', $scope.units);
      // }).
      //    error(function(data, status, headers, config) {
      //    console.log(data);
      //    console.log('YOU LOSE AT SET PROPERTY FOR FEEDBACK');
      // })
   }

  })