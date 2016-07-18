var express = require('express');
var http = require('http');
var path = require('path');
var routes = require('routes');


var app = express();
app.set('port',3000);


// jesli nie uzyjemy tej linn to nie podczepimy katalogu aplikacji
app.use(express.static('app'));


//app.get('/', function (req, res) {
//    res.send('Hello World');
//});
//app.use(express.bodyParser());

var DayEntryRouteConfig=require('./App/Sites/DayEntry/DayEntryRouteConfig');

new DayEntryRouteConfig(app);

http.createServer(app).listen(app.get('port'),function () {
    console.log( 'Express server listening on port'+app.get('port'))
})

// var server = app.listen(8081, function () {
//
//     var host = server.address().address
//     var port = server.address().port
//
//     console.log("Example app listening at http://%s:%s", host, port)
//
// })