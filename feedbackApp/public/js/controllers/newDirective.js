app.directive('greet', [function() {
	var o = {};

	o.restrict = 'E';
	o.templateUrl = '/partials/greeting.html';
	o.scope = {name: '@', age: '@'};

	return o;
}])

// this becomes a custom app - <greet> i.e.
// <greet name='Zoe' age='9999'></greet>