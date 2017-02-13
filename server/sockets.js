'use strict';

module.exports = function(io) {

    io.on('connection', function (socket) {        
        socket.on('get_curr', function (data) {                        
            socket.broadcast.emit('curr');
        });
    });
        
}