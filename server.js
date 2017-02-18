// Let’s make node/socketio listen on port 3000
//var io = require('socket.io').listen(3000);

//Initialize Web Server
var express = require('express');
var path = require("path");
var web = function() {
    var app = express();
    app.use('/_assets', express.static(__dirname + '/_assets'));
    app.get('/index.html', function (req, res) {
        res.sendFile(path.join(__dirname + '/index.html'));
    });
    app.get('/tests.html', function (req, res) {
        res.sendFile(path.join(__dirname + '/tests.html'));
    });
    app.get('/testpreview.html', function (req, res) {
        res.sendFile(path.join(__dirname + '/pages/previewTest.html'));
    });
    return app;
};
web().listen(8090, function(){
    console.log('Node Server has Started @8090');
});
