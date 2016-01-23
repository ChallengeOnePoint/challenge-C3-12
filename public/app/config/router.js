'use strict';

app.config(function($routeProvider){

	$routeProvider
		.when('/', {
			templateUrl: 'app/views/partials/home.html',
			controller: 'HomeCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});


});
