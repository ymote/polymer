var express = require('express');
var app = express();
 //express server  
server = require('http').createServer(app) ;//http wrapper server  
io = require('socket.io').listen(server); //socket.io in charge  
server.listen(8000);

// watch .js and .css files
watch = require('node-watch') ;

watch('./index.html', function() {  
  io.sockets.emit('reload') //send a message to all clients
});

//set up express to serve static content
//app.use(express.directory(__dirname));  
app.use(express.static(__dirname));  

