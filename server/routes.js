'use strict';

var path = require('path');
var handlers = require('./handlers.js');

module.exports = function(app) {

  app.route('/')
    .get(function(req, res) {
      res.sendFile(path.join(__dirname, '../public', 'index.html'))
    })

  app.route('*')
    .get(function(req, res) {
      res.sendFile(path.join(__dirname, '../public', 'index.html'))
    })
}
