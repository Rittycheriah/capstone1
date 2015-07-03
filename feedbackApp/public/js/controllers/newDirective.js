app.directive('greet', [function() {
	var o = {};

	o.restrict = 'E';
	o.replace: true, 
  o.scope: {
  	config: '='
  },
	o.templateUrl = '/partials/greeting.html'

	return o;
}])

// this becomes a custom app - <greet> i.e.
// <greet name='Zoe' age='9999'></greet>