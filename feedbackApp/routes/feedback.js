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

app.get("/all", function (req, res) {

  feedbackModel.find({}, function(err, feedBack) {
  	if (err) {
  		res.send('** did not make it');
  	} else {
  		res.json(feedBack);
  	}
  });

});

module.exports = app;