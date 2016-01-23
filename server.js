// ExpressJS
var express = require('express');
var app     = express();
var	server  = app.listen(8080);
var	io      = require('socket.io').listen(server);

require('./server/chatServer.js')(io);

<<<<<<< ea97be0ae5b0cf255f60c3d52875616445b45ad8
app.use(express.static(__dirname +'/public'));
||||||| merged common ancestors
// handles socket stuff
io.sockets.on('connection', function (socket) 
{
	console.log("user logged");
});
=======
// handles socket stuff
io.sockets.on('connection', function (socket)
{
  socket.on('submitPostit',function(data){
    socket.broadcast.emit('submitPostit',{data:data});
  });
});
>>>>>>> adds basic post-it with socket connection
