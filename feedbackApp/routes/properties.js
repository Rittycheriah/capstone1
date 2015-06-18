// CUSTOMIZE ALL OF THIS TO THE Property FUNCTIONALITY 

var express = require('express');
var app = express.Router();
var propModel = require("../models/property");

app.post("/addProperty", function (req, res) {
	console.log(req.body);

	var property = new propModel(req.body);

	property.save(function (err, user) {
	  if (property === null) {
	    res.status(403).send('Not added');
	  } else {
	    res.status(200).send("**** NEW PROPERTY MADE IT")
	  }
	});
});

app.get("/allProperties", function (req, res) {

  propModel.find({}, function(err, property) {
  	if (err) {
  		res.send('** did not make it');
  	} else {
  		res.json(property);
  	}
  });

});

module.exports = app;