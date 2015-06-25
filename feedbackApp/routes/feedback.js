// this route deals with all feedback model operations
var express = require('express');
var app = express.Router();
var feedbackModel = require("../models/feedback");


app.post("/add", function (req, res) {
	// this is where the api posts to whenever there 
	//is a request to save a new call

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
	// this is where the api GETS all for the weekly calls
	// functionality

  feedbackModel.find({}, function(err, feedBack) {
  	if (err) {
  		res.send('** did not make it');
  	} else {
  		res.json(feedBack);
  	}
  });

});

app.get("/details4OneProp/:id", function (req, res) {
  console.log(req.params.id);
  feedbackModel.find({'property_id': req.params.id}, function(err, feedBack) {
  	if (err) {
  		res.send('** did not make it to ONE PROP DETAILS #######');
  	} else {
  		console.log('Here is the feedback we found ******', feedBack)
  		res.json(feedBack);
  	}
  });

})

module.exports = app;