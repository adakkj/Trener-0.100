/**
 * Created by akraszewski on 2016-07-18.
 */
var connectionProvider = require('../mysqlConnectionStringProvider.js');

var DayEntryDA = {

    createDayEntry: function (dayEntry, OnSuccessfulCallback) {

        var insertStatement = "INSERT INTO DayEntry SET?";
        console.log('lala');
        console.log(dayEntry);

        var dayEntry = {

            WakeUp : dayEntry.WakeUp,
            SleepAt: dayEntry.SleepAt,
            DateD : dayEntry.DateD
        };

        console.log(dayEntry);

        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();

        if (connection) {

            connection.query(insertStatement, dayEntry, function (err, result) {

                if (err) {
                    console.log(err)
                }

                OnSuccessfulCallback({ status : 'successful' });
                console.log(result)
            });

            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }
    }


};

module.exports.DayEntryDA = DayEntryDA;