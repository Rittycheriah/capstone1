// these are the property model functionalities

var express = require('express');
var app = express.Router();
var propModel = require("../models/property");

// adding a brand new property to the app
app.post("/addProperty", function (req, res) {
	console.log(req.body);

//saves data as a new property Model
	var property = new propModel(req.body);

// goes to database to save the new property stored in property variable
	property.save(function (err, property) {
	  if (property === null) {
	    res.status(403).send('Not added');
	  } else {
	    console.log(property);
	    res.status(200).send("**** NEW PROPERTY MADE IT")
	  }
	});
});

// this is the GET request for allActive properties display in userHome page
app.get("/allActive", function (req, res) {

// GET request to find all properties where 'Status' = 'true'
// TRUE being that the property is currently available
  propModel.find({'Status' : true}, function (err, property) {
    if (err) {
    	res.send('** could not find it');
    } else {
 			res.json(property);
 			console.log('*****MADE IT THROUGH FIND ACTIVE');
    }
  
  });
  
});

// showing all properties for change status page 
// this shows all properties that are currently in the system
app.get("/allProperties", function (req, res) {

  propModel.find({}, function(err, property) {
  	if (err) {
  		res.send('** did not make it');
  	} else {
  		res.json(property);
  	}
  });

});


// still working out this portion of the code for possible edits 
// to hold all feedback for a specific property
app.post("/:id", function (req, res) {

  console.log(req.body, 'THIS IS ONE PROPERTY BY ID *******')
  propModel.find({'_id': req.body}, function(err, property) {
    if (err) {
      console.log(err)
      res.send('** did not make it');
    } else {
      res.json(property);
    }
  });

});

module.exports = app;