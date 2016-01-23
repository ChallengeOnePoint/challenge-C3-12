'use strict';

app.controller('HomeCtrl', function($scope, socket) {
  console.log('on est dans le HomeCtrl');



  $scope.createPostIt = function() {
    console.log("on crée uin postIt");
    socket.emit('create', {
      name: "pouet",
      creator: "Angular",
      content: []
    });
  }

  socket.on('postItArray', function(data) {
    console.log(data);
  });





  $scope.submitPostit = function() {
    console.log('clicked');
    socket.emit('submitPostit', $scope.postitTitle);

    return false;
  }

  socket.on('submitPostit', function(msg) {
    console.log(msg);
    $scope.postitTitle = msg.data;

  });

});
