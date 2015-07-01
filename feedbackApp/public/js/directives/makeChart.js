// angular.module('myApp.watchCharts', [])
//   .directive('chartWatch', [function() {
// 		var chartdiv = {};

// 		chartdiv.restrict = 'E';
// 		chartdiv.templateUrl = '/partials/chartTemp.html';
// 		chartdiv.restrict = 'E';
// 		chartdiv.replace: true, 
// 	  chartdiv.scope: {
// 	  	config: '='
// 	  },
// 		chartdiv.templateUrl = '/partials/greeting.html',
// 	  chartdiv.link: function (scope, element, attrs) {
// 	  	var chart = false; 
// 	  	var initChart = fucntion() {
// 	  		if (chart) chart.destroy();
// 	  		var config = scope.config || {};
// 	  		chart = new HighCharts.Chart(config);

// 	  		if(config.loading) {
// 	  			chart.showLoading();
// 	  		}
// 	  	};
// 	  	initChart();
// 	  chartdiv.scope.$watch('config.loading', function (loading) {
// 	  	if(loading) {
// 	  		chart.showLoading();
// 	  	} else {
// 	  		chart.hideLoading();
// 	  	}
// 	  });

// 	  chartdiv.scope.$watch('config.series[0].type' function (type) {
// 	  	chart.series[0].update({type: type});
// 	  });

// 	  chartdiv.scope.$watch('config.series[0].dataLabels.enabled', 
// 	  	function (enableDataLabels) {
// 	  		chart.series[0].update({dataLabels: {enabled: enable DataLabels}});
// 	  	});

// 	  }

// 		return chartdiv;
//   }])