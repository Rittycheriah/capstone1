var mongoose = require('mongoose');

var feedbackSchema = mongoose.Schema({
	name: {type: String, required: true, default: ''},
  phone: {type: String, required: true, default: ''},
  status: {type: String, required: true, default: ''},
  property_id: {type: String, required: true, default: ''}
});

var feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = feedback;