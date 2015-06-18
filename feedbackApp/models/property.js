var mongoose = require('mongoose');

var propertySchema = mongoose.Schema({
	HouseNum: {type: String, required: true, default: ''},
  StreetName: {type: String, required: true, default: ''},
  City: {type: String, required: true, default: ''},
  State: {type: String, required: true, default: 'TN'},
  Zip: {type: String, required: true, default: ''}
});

var property = mongoose.model('property', propertySchema);

module.exports = property;