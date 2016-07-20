var express = require('express');
var http = require('http');
//var path = require('path');
var routes = require('routes');

var globalSetup = require('./GlobalSetup.js');

var app = express();
app.set('port',globalSetup.MyPort);


// jesli nie uzyjemy tej lini to nie podczepimy katalogu aplikacji
app.use(express.static('app'));


//app.get('/', function (req, res) {
//    res.send('Hello World');
//});

var DayEntryRouteConfig=require('./App/Sites/DayEntry/DayEntryRouteConfig');
new DayEntryRouteConfig(app);

var CategoryRouteConfig=require('./App/Sites/Category/CategoryRouteConfig');
new CategoryRouteConfig(app);

var SubcategoryRouteConfig=require('./App/Sites/Subcategory/SubcategoryRouteConfig');
new SubcategoryRouteConfig(app);

var TreningEntryRouteConfig=require('./App/Sites/TreningEntry/TreningEntryRouteConfig');
new TreningEntryRouteConfig(app);


http.createServer(app).listen(app.get('port'),function () {
    console.log( 'Express server listening on port '+app.get('port'))
})

