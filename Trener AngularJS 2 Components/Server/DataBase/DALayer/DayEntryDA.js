/**
 * Created by akraszewski on 2016-07-18.
 */
var connectionProvider = require('../mysqlConnectionStringProvider.js');

var moment = require('moment');
var TreningEntryDA = require('./TreningEntryDA.js');

var DayEntryDA = {

    createDayEntryWithTreningData: function (dayEntry, OnSuccessfulCallback) {

        var insertStatement = "INSERT INTO DayEntry SET?";
        console.log('Inserting data: ');
        console.log(dayEntry);

        var dayEntryDB = {
            WakeUp: dayEntry.NewDayEntry.WakeUp,
            SleepAt: dayEntry.NewDayEntry.SleepAt,
            DateD: moment(dayEntry.NewDayEntry.DateD).format('YYYY-MM-DD')
        };


        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();

        if (connection) {
            console.log('Connection 1');

            var DayEntryIDFromDB = 0;
            connection.query(insertStatement, dayEntryDB, function (err, result) {
                console.log(insertStatement);
                console.log('Wykonano query, result: ');
                if (err) {
                    console.log(err);
                    OnSuccessfulCallback({status: 'Error'});
                }

                DayEntryIDFromDB = result.insertId;
                console.log(DayEntryIDFromDB);
                console.log(result);

                //trening date
                console.log(dayEntry.treningEntryArray);
                TreningEntryDA.TreningEntryDA.addTreningData(dayEntry.treningEntryArray,DayEntryIDFromDB,OnSuccessfulCallback)
            });
            
            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
            console.log('Connection 1 - zamkniecie - a jednak nie zamknieto');
        }





        OnSuccessfulCallback({status: 'Successful', resultID: DayEntryIDFromDB});

    },



    getDayEntries: function (OnSuccessfulCallback) {

        var selectStatement = "SELECT * FROM DayEntry";
        console.log('Selecting DayEntry data: ');

        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();

        if (connection) {

            connection.query(selectStatement, function (err, rows, fields) {

                if (err) {
                    console.log(err)
                }

                OnSuccessfulCallback(rows);
                console.log(rows)
            });

            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }
    }


};

module.exports.DayEntryDA = DayEntryDA;