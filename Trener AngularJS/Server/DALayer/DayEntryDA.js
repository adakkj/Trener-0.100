/**
 * Created by akraszewski on 2016-07-18.
 */
var connectionProvider = require('../mysqlConnectionStringProvider.js');
//var dateFormat = require('./../../app/js/DateFormatLibrary.js');
var moment = require('moment');

var DayEntryDA = {

    createDayEntry: function (dayEntry, OnSuccessfulCallback) {

        var insertStatement = "INSERT INTO DayEntry SET?";
        console.log('Inserting data: ');
        console.log(dayEntry);

        var dayEntryDB = {
            WakeUp : dayEntry.WakeUp,
            SleepAt: dayEntry.SleepAt,
            DateD :  moment(dayEntry.DateD).format('YYYY-MM-DD')
        };


        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();

        if (connection) {

            connection.query(insertStatement, dayEntryDB, function (err, result) {

                if (err) {
                    console.log(err)
                    OnSuccessfulCallback({ status : 'Error' });
                }

                OnSuccessfulCallback({ status : 'successful' });
                console.log(result)
            });

            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }
    },

    getDayEntries: function (OnSuccessfulCallback) {

        var selectStatement = "SELECT * FROM DayEntry";
        console.log('Selecting DayEntry data: ');

        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();

        if (connection) {

            connection.query(selectStatement, function (err,rows,fields) {

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