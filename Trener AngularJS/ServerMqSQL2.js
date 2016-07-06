var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'Articles2'
});
var app = express();

connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ... nn");
    } else {
        console.log("Error connecting database ... nn");
    }
});

app.get("/",function(req,res){
    connection.query('SELECT * from articles', function(err, rows, fields) {
        connection.end();
        if (!err)
            console.log('The solution is: ', rows);
        else
            console.log('Error while performing Query.');
    });
});

app.post("/data",function(req,res){


    connection.query('SELECT * from articles', function(err, rows, fields) {
       connection.end();
        if (!err) {
            console.log('The solution is: ', rows);
            res.end(JSON.stringify(rows));
        }
        else {
            res.writeHead(200, {
                'Content-Type' : 'x-application/json'
            });
            res.write(JSON.stringify({dupa:'lala'}));
           res.end(err);
        }

    });

    // getSQL(function(err, result) {
    //     res.writeHead(200, {
    //         'Content-Type' : 'x-application/json'
    //     });
    //     res.end(result);
    // });

});



app.listen(3000);/**
 * Created by adamk on 03.07.2016.
 */
