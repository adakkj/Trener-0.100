/**
 * Created by akraszewski on 2016-07-19.
 */
var connectionProvider = require('../mysqlConnectionStringProvider.js');

var CategoryDA = {


    getCategories: function (OnSuccessfulCallback) {

        var selectStatement ='SELECT * FROM Category';

        console.log('Selecting Categories data: ');

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
    }


};

module.exports.CategoryDA = CategoryDA;