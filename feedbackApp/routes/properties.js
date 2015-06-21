// CUSTOMIZE ALL OF THIS TO THE Property FUNCTIONALITY 

var express = require('express');
var app = express.Router();
var propModel = require("../models/property");

app.post("/addProperty", function (req, res) {
	console.log(req.body);

	var property = new propModel(req.body);

	property.save(function (err, property) {
	  if (property === null) {
	    res.status(403).send('Not added');
	  } else {
	    console.log(property);
	    res.status(200).send("**** NEW PROPERTY MADE IT")
	  }
	});
});

app.get("/allActive", function (req, res) {

  propModel.find({'Status' : true}, function (err, property) {
    if (err) {
    	res.send('** could not find it');
    } else {
 			res.json(property);
 			console.log('*****MADE IT THROUGH FIND ACTIVE');
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

app.get("/:id", function (req, res) {

  console.log(req.body, 'THIS IS ONE PROPERTY BY ID *******')
  propModel.find({'_id': req.body._id}, function(err, property) {
    if (err) {
      res.send('** did not make it');
    } else {
      res.json(property);
    }
  });

});

module.exports = app;