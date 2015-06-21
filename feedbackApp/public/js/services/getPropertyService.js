angular.module("myApp.propertyService", []).service('currentPropertyService', function() {
	var currentProperty = {};
	return {
		setProperty : function (property) {
			currentProperty = unit;
		}, 
		getProperty : function () {
			return unit;
		}
	}
})