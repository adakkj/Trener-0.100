var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Praca2016?',
    database: 'TrenerDB'
});
connection.connect();

// var article = {
//     author: 'Alex Booker',
//     title: 'Git tutorial',
//     body: 'foo bar'
// };

// var query = connection.query('insert into articles set ?', article, function (err, result) {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.error(result);
// });


// var sql = "INSERT INTO Category (name) VALUES ?";
// var values = [
//     ['Wspinaczka'],
//     ['Bieganie'],
//     ['Silownia']
// ];
//
//
// connection.query(sql, [values], function (err) {
//     if (err) throw err;
//     connection.end();
// });


// var sql2 = "INSERT INTO Subcategory (CategoryID,name) VALUES ?";
// var values2 = [
//     [9, 'Miasto'],
//     [9, 'Zawody'],
//     [9, 'Przeajowe'],
//     [9, 'Góry'],
//     [9, 'Las'],
//     [10, 'Bloco'],
//     [10, 'Crux'],
//     [10, 'Skaly'],
//     [10, 'Warszawianka'],
//     [11, 'Domowa'],
//     [11, 'Na powietrzu'],
//     [11, 'Zwykla']
// ];
//
//
// connection.query(sql2, [values2], function (err) {
//     if (err) throw err;
//     connection.end();
// });