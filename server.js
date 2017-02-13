var express = require('express');
var path = require('path');
var routes = require('./server/routes.js');
var sockets = require('./server/sockets.js');

var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'server')));

routes(app);
sockets(io);

var PORT = process.env.PORT || 8080
server.listen(PORT, function() {
  console.log('Express server running at localhost:' + PORT)
})
