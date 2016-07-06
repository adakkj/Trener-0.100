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


    var url = req.url;
    console.log(url);


    console.log('Receving request...');
    var callback = function(err, result) {
        res.writeHead(200, {
            'Content-Type' : 'x-application/json'
        });
        console.log('json:', result);
        res.end(result);
    };


    console.log('URLss ...');
    if(url.toLowerCase() === '/category')
    {
        console.log('AAA Category...');
        getSQL(callback,'Category');
    }
    else if(url.toLowerCase() === '/subcategory')
    {
        console.log('AAA   Subcategory ...');
        getSQL(callback,'Subcategory');
}
    else
    {
        getSQL(callback,'no url');
    }


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
    if (addParam==='Category')
    {
          query = 'SELECT * FROM Category';
    }
    else if(addParam === 'Subcategory')
    {
          query = 'SELECT * FROM Subcategory';
    }
    else
    {
        query='';
    }

    connection.query(query, function(err, results, fields) {
        if (err)
            return callback(err, null);

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