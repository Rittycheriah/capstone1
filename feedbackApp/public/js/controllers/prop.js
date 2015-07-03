angular.module('myApp.propertyController', [])
	.controller('propertyCtrl', function ($scope, $http, $location, $rootScope) {
	  $scope.title = 'TR@CKeR Properties';

    // this function gets all properties that are in the system
    var getProps = function () {
    $http({
      method: 'GET',
      url: '/property/allProperties'
    }).
    success(function(data, status, headers, config) {
      console.log('got it!');
      console.log(data);
      $scope.units = data;
    }).
    error(function(data, status, headers, config) {
      console.log('cannot get list of properties');
    });
   };

   // calling the function as soon as the controller is loaded
   getProps();

    // this adds the property that is input in the form to the backend
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
	  	}).
      success(function(data, status, headers, config) {
        console.log('posting new property');
      }).
      error(function(data, status, headers, config) {
        console.log('cannot POST to addProperty');
      })
	  }

    // this declares a variable that toggles the display of 
    //changing of each set of feedback
    $scope.showChangeForm = false;

    // show change form for status
    $scope.showForm = function (propId) {
      $scope.showChangeForm = propId;
      return
    }

    // hide change form
    $scope.collapseForm = function () {
      $scope.showChangeForm = false;
      return
    }

    $scope.change2Occupied = function (propId) {
      $http({
        method: 'PUT',
        url: '/property/changePropStatusOccupied/' + propId
      }).
      success(function(data, status, headers, config) {
        console.log('putting OCCUPIED');
      }).
      error(function(data, status, headers, config) {
        console.log('cannot OCCUPIED switch');
      })
      $location.path('/userHome')
    }

    $scope.change2Vacant = function (propId) {
      $http({
        method: 'PUT',
        url: '/property/changePropStatusVacant/'+ propId
      }).
      success(function(data, status, headers, config) {
        console.log('posting VACANT');
      }).
      error(function(data, status, headers, config) {
        console.log('cannot VACANT switch');
      })
      $location.path('/userHome')
    }
 })
  .controller('showAllActivePropFeedback', [

    '$scope',
    '$http', 
    '$location', 
    '$rootScope', 
    'currentPropertyService',

    function ($scope, $http, $location, $rootScope, currentPropertyService) {
  	$scope.title = 'TR@CKeR NEW HOME';

    // here is the function that acts to get all active properties
  	var getActiveProps = function () {
     	$http({
     		method: 'GET',
     		url: '/property/allActive'
     	}).
     	success(function(data, status, headers, config) {
     		console.log('got it!');
        console.log(data);
     		$scope.units = data;
     	}).
     	error(function(data, status, headers, config) {
     		console.log('cannot get list of properties');
      });
    };
    getActiveProps();

   // this gets all detailed feedback when details is clicked
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

    // this declares a variable that toggles the display of 
    //details of each set of feedback
    $scope.showDets = false;

    // this changes the dets display so it shows by changing the boolean value of 
    // showDets variable
    $scope.changeDetsStatus = function (propId) {
      $scope.showDets = propId;
      getDetailedFeedback(propId);
      return
    }

    // this changes the showDets variable to false again to hide details
    $scope.hideDetsAgain = function () {
      $scope.showDets = false;
      return
    }
    
    // this sends the property's id via service to the form to add feedback
    $scope.feedbackAdd = function (unitId) {
      console.log('Going to add feedback, here is the unit', unitId);
      currentPropertyService.setProperty(unitId);
      $location.path('addFeedback');
    }

    // this function adds a new call with a property id ONLY 
    $scope.addNewCall = function (propId) {
      $http({
        method: 'PUT',
        url: '/property/add2callCount/'+ propId
      }).
      success(function(data, status, headers, config) {
        console.log('posting new call');
      }).
      error(function(data, status, headers, config) {
        console.log('cannot POST to addCall');
      })
      
      getActiveProps();
    } 

    //Post Showing Post to Feedback
    $scope.postShow = function (propId) {
      console.log('going to add post showing feedback');
      currentPropertyService.setProperty(propId);
      $location.path('postShowingFeedback')
    } 

    // $scope.viewGraph = function (propId) {
    //   console.log('going to viewing Graph');
    //   currentPropertyService.setProperty(propId);
    //   $location.path('viewGraph');
    // } 
}]);