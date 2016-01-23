//socket.emit : emit to the active user
//socket.broadcast.emit : emit to all user except active one
//io.sockets.emit : emit to all users

var postItArray = [];

module.exports = function(io) {

  var send = function(socket, message) {
    socket.emit('message', message);
    console.log("emitted message");
  };

  var sendStatus = function(socket, string) {
    socket.emit('status', string);
    console.log("emitted status");
  };

  io.sockets.on('connection', function (socket) {
  	console.log("user logged");
  	socket.on('create', function(data){
  		console.log('postIt added in arra ' + postItArray);
  		postItArray.push(data);
  		io.emit('postItArray' ,postItArray);
  	});
  });
};
