'use strict';

var path = require('path');
var handlers = require('./handlers.js');

module.exports = function(app) {

  app.route('/')
    .get(function(req, res) {
      res.sendFile(path.join(__dirname, '../public', 'index.html'))
    })

  app.route('/api/add/:code')
    .get(handlers.add)

  app.route('/api/curr')
    .get(handlers.get_current)
  
  app.route('/api/del/:code')
    .get(handlers.del)
    
}
