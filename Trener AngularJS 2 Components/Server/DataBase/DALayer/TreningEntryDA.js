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
    },

    addTreningData: function (treningDataArray,dayEntryID,OnSuccessfulCallback) {


        console.log('----------Dodawanie TreningData-------------');
        var connection2 = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();
        if (connection2) {
            console.log('Connection 2');
            console.log('Parametry: ');
            console.log(dayEntryID);
            console.log(treningDataArray);


            if (treningDataArray && treningDataArray.length > 0) {
                console.log('Wchodz do if');
                var i;
                for(i in treningDataArray)
                {
                    console.log('Wchodz do petli');
                    var treningEntryDB = {
                        DayEntryID: dayEntryID,
                        Description: treningDataArray[i].Description,
                        CategoryID: treningDataArray[i].Cat.id,
                        SubcategoryID: treningDataArray[i].Subcat.id,
                        Duration: treningDataArray[i].Duration,
                        Power: treningDataArray[i].Power

                    };
                    var sql = "INSERT INTO TreningEntry SET?";

                    connection2.query(sql, treningEntryDB, function (err, result) {
                        console.log(sql);
                        console.log('Wykonano query, result: ');
                        if (err) {
                            console.log(err);
                            OnSuccessfulCallback({status: 'Error'});
                        }
                        console.log(result)

                    });
                }
            }
            console.log('Connection 2 - zamkniecie');
            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection2);
        }

    }

};

module.exports.TreningEntryDA = TreningEntryDA;