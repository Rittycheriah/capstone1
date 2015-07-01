angular.module('myApp.logoutController', [])
  .controller('logoutCtrl', function ($scope, $rootScope, $location) {
		$scope.logout = function() {
			console.log('hit logout function')
			$rootScope.rootuser = null;
			$location.path('/login')
		}
})