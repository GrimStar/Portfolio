var express = require('express');
var toDoController = require('./controllers/toDoController.js');
var http = require('http');
var fc = require('./controllers/forumController.js');
var app = express();
//var server = http.createServer(app);
//var io = require('socket.io');
//io.listen(server);

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//how to get the path received by get
//app.get('/:path', function(req, res){ res.send(req.params.path);});

//fire controllers
toDoController(app);
fc(app);
app.listen(80);
console.log('listening...');