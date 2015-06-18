angular.module('myApp.propertyController', [])
	.controller('propertyCtrl', function ($scope, $http, $location, $rootScope) {
	  $scope.title = 'TR@CKeR Properties';

	  $scope.addProperty = function() {
	  	$http({
	  		method: 'POST', 
	  		url: '/property/addProperty',
	  		data: {
	  			HouseNum: $scope.property.houseNumber,
	  			StreetName: $scope.property.street,
	  			City: $scope.property.city,
	  			State: $scope.property.state,
	  			Zip: $scope.property.zip 
	  		}
	  	})
	  }
 })
  .controller('showPropertiesCtrl', function ($scope, $http, $location, $rootScope) {
  	$scope.title = 'TR@CKeR Show All Properties';

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

  })