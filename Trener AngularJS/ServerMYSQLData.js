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



// var sql = "INSERT INTO DayEntry (DateD,WakeUp,SleepAt) VALUES ?";
// var values = [
//     ['2016-07-13', '7:00', '23:10'],
//     ['2016-07-14', '6:10', '22:10'],
//     ['2016-07-15', '7:20', '23:50'],
//     ['2016-07-16', '7:10', '23:25']
// ];
//
//
// connection.query(sql, [values], function (err) {
//     if (err) throw err;
//     connection.end();
// });


// var sql = "INSERT INTO TreningEntry (DayEntryID,Description,CategoryID,SubCategoryID,Duration,Power) VALUES ?";
// var values = [
//     [17, 'Trening na Crux', 10,7,2,4  ],
//     [17, 'Trening na silowni domowej', 11,10,1,3  ],
//     [18, 'Bieganie balaton', 9,1,1,4  ],
//     [19, 'Trening w domu', 11,10,2,4  ]
// ];
//
//
// connection.query(sql, [values], function (err) {
//     if (err) throw err;
//     connection.end();
// });