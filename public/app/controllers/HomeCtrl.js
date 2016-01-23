'use strict';

app.controller('HomeCtrl', function($scope, $location){
	var socket = io();

	console.log('on est dans le HomeCtrl');

	$scope.createPostIt = function(){
		console.log("on crée uin postIt");
		socket.emit('create', {
			name  : "pouet",
			creator : "Angular",
			content : []
		});
	}

	socket.on('postItArray', function(data){
		console.log(data);
	});
});

