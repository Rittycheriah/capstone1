var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page for Feedback Tracker' });
});

router.get('/register', function(req, res, next) {
	res.render('register', { title: 'Register Pg for Feedback Tracker'});
});

module.exports = router;
