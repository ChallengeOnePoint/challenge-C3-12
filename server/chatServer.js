//socket.emit : emit to the active user
//socket.broadcast.emit : emit to all user except active one
//io.sockets.emit : emit to all users

var postItArray = [];

module.exports = function(io) {

  io.sockets.on('connection', function (socket) {
  	console.log("user logged");
    io.emit('postItArray' ,postItArray);

  	socket.on('create', function(data){
  		console.log('postIt added in arra ' + postItArray);
  		postItArray.push(data);
  		io.emit('postItArray' ,postItArray);
  	});

    socket.on('submitPostit',function(data){
      socket.broadcast.emit('submitPostit',{data:data});
    });
  });
};
