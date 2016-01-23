// ExpressJS
var express = require('express');
var app     = express();
var	server  = app.listen(8080);
var	io      = require('socket.io').listen(server);

require('./server/chatServer.js')(io);

app.use(express.static(__dirname +'/public'));
