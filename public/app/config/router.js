'use strict';

app.config(function($routeProvider){

	$routeProvider
		.when('/', {
			templateUrl: 'app/views/partials/home.html',
			controller: 'HomeCtrl'
		})
		.when('/big', {
			templateUrl: 'app/views/partials/home.html',
			controller: 'HomeCtrl'
		})
		.when('/small', {
			templateUrl: 'app/views/partials/small.html',
			controller: 'HomeCtrl'
		})
		.when('/list', {
			templateUrl: 'app/views/partials/list.html',
			controller: 'HomeCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});


});
