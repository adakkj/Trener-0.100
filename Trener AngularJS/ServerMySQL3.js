/**
 * Created by adamk on 03.07.2016.
 */
// Check dependencies
var http = require('http');
// Create the http server.
// reference: http://net.tutsplus.com/tutorials/javascript-ajax/node-js-for-beginners/

/***************
 * Correction 1: Using the request.on('close', function()( ... )-listener isn't required anymore
 ***************/
http.createServer(function(req, res) {


    console.log('---------------Start Receving request-------------');
    var callback = function(err, result) {
        res.writeHead(200, {
            'Content-Type' : 'x-application/json'
        });
        console.log('json:', result);
        res.writeHead(200, {'Access-Control-Allow-Origin': '*'});

        res.end(result);
    };


    console.log('URLss ...');
    var url = req.url;
    console.log(url);

    if(url.toLowerCase() === '/category'.toLowerCase())
    {
        console.log('Category sublink selected...');
        getSQL(callback,'category');
    }
    else if(url.toLowerCase() === '/subcategory'.toLowerCase())
    {
        console.log('Subcategory sublink selected...');
        getSQL(callback,'subcategory');
}
    else if(url.toLowerCase() === '/treningentry'.toLowerCase())
    {
        console.log('TreningRntry sublink selected...');
        getSQL(callback,'treningentry');
    }
    else if(url.toLowerCase() === '/CatAndSubCatTreningTypesView'.toLowerCase())
    {
        console.log('CatAndSubCatTreningTypesView sublink selected...');
        getSQL(callback,'CatAndSubCatTreningTypesView');
    }
    else if(url.toLowerCase() === '/DayEntryMainView'.toLowerCase())
    {
        console.log('DayEntryMainView sublink selected...');
        getSQL(callback,'DayEntryMainView');
    }
    else if(url.toLowerCase() === '/TreningEntryMainView'.toLowerCase())
    {
        console.log('TreningEntryMainView sublink selected...');
        getSQL(callback,'TreningEntryMainView');
    }
    else
    {
        getSQL(callback,'no url mathed');
    }

    console.log('---------------End request-------------');
}).listen(3000);

// Access MySQL via node-mysql
// https://github.com/felixge/node-mysql
function getSQL(callback,addParam) {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'Praca2016?',
        database : 'TrenerDB',
       // socketPath : '/var/run/mysqld/mysqld.sock', // socket for communication from debian <-> client, seems not to be set correcly by default?
    });

    connection.connect();
    var json = '';
    var query;

    console.log('Funkcja getSQL addParam: '+addParam);
    if (addParam==='category')
    {
          query = 'SELECT * FROM Category';
    }
    else if(addParam === 'subcategory')
    {
          query = 'SELECT * FROM Subcategory';
    }
    else if(addParam === 'treningentry')
    {
        query = 'SELECT * FROM TreningEntry';
    }
    // ----------------z SENSEM--------------------------------
    else if(addParam === 'CatAndSubCatTreningTypesView')
    {
        query = 'select c.name as CategoryName, s.* from category c inner join subcategory s on s.CategoryId=c.id';
    }
    else if(addParam === 'DayEntryMainView')
    {
        query = 'SELECT * FROM DayEntry'
    }
    else if(addParam === 'TreningEntryMainView')
    {
        query = 'SELECT '+
        'd.ID as D_ID, '+
            't.ID as T_ID,t.CategoryID, t.SubcategoryID, t.Duration, t.Power '+
        'FROM dayentry d INNER JOIN treningEntry t ON t.DayEntryID=d.id ';
    }
    else
    {
        query='';
    }
    console.log('Funkcja getSQL used query: '+query);

    connection.query(query, function(err, results, fields) {

        if (err) {
            console.log(err);
            return callback(err, null);
        }

        console.log('The query-result is: ', results[0]);

        // wrap result-set as json
        json = JSON.stringify(results);

        /***************
         * Correction 2: Nest the callback correctly!
         ***************/
        connection.end();
        console.log('JSON-result:', json);
        callback(null, json);
    });
};



var express = require('express');
var app = express();

app.use(express.static('app'));

// app.get('/', function (req, res) {
//     res.send('Hello World');
// })

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})