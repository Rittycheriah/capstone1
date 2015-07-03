angular.module('myApp.graphsController', [])
	.controller('viewGraphs', [
		'$scope', 
		'$http', 
		'$location', 
		'$rootScope', 
		'currentPropertyService', 
    function ($scope, $http, $location, $rootScope, currentPropertyService) {
     // this MODULE is for viewing the graph associated with a property
	  $scope.title = 'TR@CKeR VIEW GRAPHS'
    $scope.getCurrentProp = currentPropertyService.getProperty();
    console.log($scope.getCurrentProp);

    // var plotMe = function(){
    //   console.log('plotMe')
    //     var chart = AmCharts.makeChart('chartdiv', {
    //       'type': 'serial',
    //       'theme': 'dark',
    //       'dataProvider': [{
    //         'Answer Choice': 'A',
    //         'students': 3
    //       }, {
    //         'Answer Choice': 'B',
    //         'students': 4
    //       }, {
    //         'Answer Choice': 'C',
    //         'students': 2
    //       }, {
    //         'Answer Choice': 'D',
    //         'students': 4
    //       }, {
    //         'Answer Choice': 'E',
    //         'students': 8
    //       }],
    //       'valueAxes': [{
    //         'gridColor':'#FFFFFF',
    //         'gridAlpha': 0.2,
    //         'dashLength': 0,
    //         'labelsEnabled': true,
    //         'title': 'Number of Students'
    //       }],
    //       'gridAboveGraphs': true,
    //       'startDuration': 1,
    //       'graphs': [{
    //         'balloonText': '[[category]]: <b>[[value]]</b>',
    //         'fillAlphas': 0.8,
    //         'lineAlpha': 0.2,
    //         'type': 'column',
    //         'valueField': 'students'
    //       }],
    //       'chartCursor': {
    //         'categoryBalloonEnabled': false,
    //         'cursorAlpha': 0,
    //         'zoomable': false
    //       },
    //       'categoryField': 'Answer Choice',
    //       'categoryAxis': {
    //         'gridPosition': 'start',
    //         'gridAlpha': 0,
    //         'tickPosition':'start',
    //         'tickLength':20,
    //         'title': 'Answer Choices'
    //       },
    //       'exportConfig':{
    //         'menuTop': 0,
    //         'menuItems': [{
    //           'icon': '/lib/3/images/export.png',
    //           'format': 'png'
    //         }]
    //       }
    //     });
    // };

    // plotMe();

    var myChart = function () {
      var chart = AmCharts.makeChart('chartdiv', 
        {
        "type": "serial",
        "categoryField": "category",
        "startDuration": 1,
        "theme": "dark",
        "categoryAxis": {
          "gridPosition": "start"
        },
        "trendLines": [],
        "graphs": [
          {
            "balloonColor": "#3719E1",
            "balloonText": "[[title]] on [[category]]:[[value]]",
            "fillAlphas": 1,
            "fillColors": "#1BB8ED",
            "id": "CallsColumn",
            "title": "Calls",
            "type": "column",
            "valueField": "column-1"
          },
          {
            "balloonText": "[[title]] on [[category]]:[[value]]",
            "fillAlphas": 1,
            "fillColors": "#0C21AC",
            "id": "ShowingsColumn",
            "title": "Showings",
            "type": "column",
            "valueField": "column-2"
          }
        ],
        "guides": [],
        "valueAxes": [
          {
            "duration": "mm",
            "id": "ValueAxis-1",
            "maximum": 30,
            "minimum": 0,
            "precision": 0,
            "fontSize": 12,
            "gridCount": 6,
            "labelOffset": 4,
            "title": "Totals",
            "titleFontSize": 14
          }
        ],
        "allLabels": [],
        "balloon": {},
        "legend": {
          "useGraphSettings": true
        },
        "titles": [
          {
            "id": "Title-1",
            "size": 15,
            "text": "Calls and Showings"
          }
        ],
        "dataProvider": [
          {
            "category": "Monday",
            "column-1": "2",
            "column-2": "3"
          },
          {
            "category": "Tuesday",
            "column-1": "6",
            "column-2": "3"
          },
          {
            "category": "Wednesday",
            "column-1": "2",
            "column-2": "3"
          },
          {
            "category": "Thursday",
            "column-1": "1",
            "column-2": "4"
          },
          {
            "category": "Friday",
            "column-1": "3",
            "column-2": "2"
          }
        ]
        }
      )
    };

    myChart();
}])