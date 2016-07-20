/**
 * Created by akraszewski on 2016-07-19.
 */
var connectionProvider = require('../mysqlConnectionStringProvider.js');

var TreningEntryDA = {


    getTreningEntries: function (OnSuccessfulCallback) {

        var selectStatement ='SELECT '+
            'd.ID as D_ID, '+
            't.ID as T_ID,t.CategoryID, t.SubcategoryID, t.Duration, t.Power '+
            'FROM dayentry d INNER JOIN treningEntry t ON t.DayEntryID=d.id ';

        console.log('Selecting TreningEntries data: ');

        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();

        if (connection) {

            connection.query(selectStatement,  function (err,rows,fields) {

                if (err) {
                    console.log(err)
                }

                OnSuccessfulCallback(rows);
                console.log(rows)
            });

            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }
    },
    getTreningEntryByID: function (TreningEntryID, OnSuccessfulCallback) {

        var selectStatement ='SELECT * FROM treningentry where id=?';

        console.log('Selecting TreningEntryByID data: ');

        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();

        if (connection) {

            connection.query(selectStatement, [TreningEntryID],function (err,rows,fields) {

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

module.exports.TreningEntryDA = TreningEntryDA;