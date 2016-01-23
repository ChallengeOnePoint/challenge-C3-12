// ExpressJS
var express = require('express');
var app     = express(),
	server  = app.listen(8080),
	io      = require('socket.io').listen(server);

app.use(express.static(__dirname +'/public'));


// handles socket stuff
io.sockets.on('connection', function (socket) 
{
	console.log("user logged");
});
