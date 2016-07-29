/**
 * Created by akraszewski on 2016-07-19.
 */
var connectionProvider = require('../mysqlConnectionStringProvider.js');

var SubcategoryDA = {


    getSubcategories: function (OnSuccessfulCallback) {

        var selectStatement ='SELECT * FROM Subcategory';
 
        console.log('Selecting Subcategories data: ');

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

module.exports.SubcategoryDA = SubcategoryDA;