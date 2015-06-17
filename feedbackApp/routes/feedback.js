// CUSTOMIZE ALL OF THIS TO THE FEEDBACK FUNCTIONALITY 

var express = require('express');
var app = express.Router();
var feedbackModel = require("../models/feedback");

app.post("/add", function (req, res) {
	console.log(req.body);

	var feedBack = new feedbackModel(req.body);

	feedBack.save(function (err, user) {
	  if (feedBack === null) {
	    res.status(403).send('Not added');
	  } else {
	    res.status(200).send("**** FEEDBACK MADE IT")
	  }
	});
});

// app.get("/allFeedback", function (req, res) {

// 	var allData = 

//   if (user === null) {
//     res.status(403).send('Not authenticated');
//   } else {
//     res.status(200).json(user);

//   }


// });

module.exports = app;