var express = require('express');
var path = require('path');
var routes = require('./server/routes.js');

var app = express();


// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'server')));

routes(app);

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
