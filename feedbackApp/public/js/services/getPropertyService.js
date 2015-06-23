angular.module("myApp.propertyService", []).service('currentPropertyService', function() {
	var currentProperty = {};

	return {
		setProperty : function (unit) {
			currentProperty = unit;
		}, 
		getProperty : function () {
			return currentProperty;
		}
	}
})