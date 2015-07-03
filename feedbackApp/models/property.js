// this is the model for any property added to the application
var mongoose = require('mongoose');

var propertySchema = mongoose.Schema({
	HouseNum: {type: String, required: true, default: ''},
  StreetName: {type: String, required: true, default: ''},
  City: {type: String, required: true, default: ''},
  State: {type: String, required: true, default: 'TN'},
  Zip: {type: String, required: true, default: ''},
  Status: {type: Boolean, required: true, default: false}, 
  callCount: {type: Number, required: true, default: 0}, 
  archive: {type: Boolean, required: true, default: false}
});

var property = mongoose.model('property', propertySchema);

module.exports = property;