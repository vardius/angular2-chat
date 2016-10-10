/**
 * This file is part of the angular2-chat package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', socket => {
    console.log('User Connected...');

    socket.on('disconnect', () => {
        console.log('User Disconnected...');
    });

    socket.on('add-message', (message, username) => {
        io.emit('message', {
            type: 'new-message',
            text: message,
            username: username
        })
    });
});

http.listen(8000, () => {
    console.log('Server running on port 8000');
});
