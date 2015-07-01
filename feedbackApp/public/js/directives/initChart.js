// angular.module('myApp.initializeChart')
//   .directive('myChart', [

//    function () {
//        return {
//            restrict: 'E',
//            replace:true,

//            template: '<div id="chartdiv" style="min-width: 310px; height: 400px; margin: 0 auto"></div>',
//            link: function (scope, element, attrs) {

//               var chart = false;

//               var initChart = function() {
//                       if (chart) chart.destroy();
//                       var config = scope.config || {};
//                        chart = AmCharts.makeChart("chartdiv", {
//                     "type": "serial",
//                     "theme": "none",
//                     "marginLeft": 20,
//                     "pathToImages": "http://www.amcharts.com/lib/3/images/",
//                     "dataProvider": [ {
//                         "year": "2005",
//                         "value": 0.47
//                     }],
//                     "valueAxes": [{
//                         "axisAlpha": 0,
//                         "inside": true,
//                         "position": "left",
//                         "ignoreAxisWidth": true
//                     }],
//                     "graphs": [{
//                         "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
//                         "bullet": "round",
//                         "bulletSize": 6,
//                         "lineColor": "#d1655d",
//                         "lineThickness": 2,
//                         "negativeLineColor": "#637bb6",
//                         "type": "smoothedLine",
//                         "valueField": "value"
//                     }],
//                     "chartScrollbar": {},
//                     "chartCursor": {
//                         "categoryBalloonDateFormat": "YYYY",
//                         "cursorAlpha": 0,
//                         "cursorPosition": "mouse"
//                     },
//                     "dataDateFormat": "YYYY",
//                     "categoryField": "year",
//                     "categoryAxis": {
//                         "minPeriod": "YYYY",
//                         "parseDates": true,
//                         "minorGridAlpha": 0.1,
//                         "minorGridEnabled": true
//                         }
//               };
//             } ();
            
//    ]});