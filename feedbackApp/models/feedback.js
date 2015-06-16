var mongoose = require('mongoose');

var feedbackSchema = mongoose.Schema({
	// will match all field names in the form
});

var feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = feedback;