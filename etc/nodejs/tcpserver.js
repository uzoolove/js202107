const net = require('net');

net.createServer(function(socket){
  console.log(socket.remoteAddress, '접속');
  socket.on('data', function(data){
    console.log('from client:', data.toString());
    
  });
}).listen(1234, function(){
  console.log('TCP 서버 구동.');
});