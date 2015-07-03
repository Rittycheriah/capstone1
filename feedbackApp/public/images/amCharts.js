// AmCharts.ready(function() {

// 	console.log("Define the data")
// 	var myData = [
// 		{
// 			"category": "Monday",
// 			"column-1": 8,
// 			"column-2": 5
// 		},
// 		{
// 			"category": "Tuesday",
// 			"column-1": 6,
// 			"column-2": 7
// 		},
// 		{
// 			"category": "Wednesday",
// 			"column-1": "2",
// 			"column-2": "3"
// 		},
// 		{
// 			"category": "Thursday",
// 			"column-1": "1",
// 			"column-2": "4"
// 		},
// 		{
// 			"category": "Friday",
// 			"column-1": "3",
// 			"column-2": "2"
// 	];




// 	console.log("Define the chart")
// 	var chart = new AmCharts.AmSerialChart();
// 	chart.dataProvider = myData;
// 	chart.categoryField = "category";

// 	console.log("Define the graph")
// 	var graph = new AmCharts.AmGraph();
// 	graph.valueField = "column-1";
// 	graph.type = "column";
// 	chart.addGraph(graph);

// 	chart.write("chartdiv");

// 	console.log(chart)
// })


// AmCharts.ready(function() {

// 	AmCharts.makeChart("chartdiv",
// 		{
// 			"type": "serial",
// 			"categoryField": "category",
// 			"startDuration": 1,
// 			"theme": "dark",
// 			"categoryAxis": {
// 				"gridPosition": "start"
// 			},
// 			"trendLines": [],
// 			"graphs": [
// 				{
// 					"balloonColor": "#3719E1",
// 					"balloonText": "[[title]] on [[category]]:[[value]]",
// 					"fillAlphas": 1,
// 					"fillColors": "#1BB8ED",
// 					"id": "CallsColumn",
// 					"title": "Calls",
// 					"type": "column",
// 					"valueField": "column-1"
//        },
// 				{
// 					"balloonText": "[[title]] on [[category]]:[[value]]",
// 					"fillAlphas": 1,
// 					"fillColors": "#0C21AC",
// 					"id": "ShowingsColumn",
// 					"title": "Showings",
// 					"type": "column",
// 					"valueField": "column-2"
// 				}
// 			],
// 			"guides": [],
// 			"valueAxes": [
// 				{
// 					"duration": "mm",
// 					"id": "ValueAxis-1",
// 					"maximum": 30,
// 					"minimum": 0,
// 					"precision": 0,
// 					"fontSize": 12,
// 					"gridCount": 6,
// 					"labelOffset": 4,
// 					"title": "Totals",
// 					"titleFontSize": 14
// 				}
// 			],
// 			"allLabels": [],
// 			"balloon": {},
// 			"legend": {
// 				"useGraphSettings": true
// 			},
// 			"titles": [
// 				{
// 					"id": "Title-1",
// 					"size": 15,
// 					"text": "Chart Title"
// 				}
// 			],
// 			"dataProvider": [
// 				{
// 					"category": "Monday",
// 					"column-1": 8,
// 					"column-2": 5
// 				},
// 				{
// 					"category": "Tuesday",
// 					"column-1": 6,
// 					"column-2": 7
// 				},
// 				{
// 					"category": "Wednesday",
// 					"column-1": "2",
// 					"column-2": "3"
// 				},
// 				{
// 					"category": "Thursday",
// 					"column-1": "1",
// 					"column-2": "4"
// 				},
// 				{
// 					"category": "Friday",
// 					"column-1": "3",
// 					"column-2": "2"
// 				}
// 			]
// 		}
// 	);
// })