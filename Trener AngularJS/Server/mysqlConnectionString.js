/**
 * Created by akraszewski on 2016-07-18.
 */
var mysqlConnectionString = {

    connection  :{

        dev : {
            host: 'localhost',
            user: 'root',
            password : 'Praca2016?',
            database : 'TrenerDB'
        },
        qa : {
            host: 'localhost',
            user: 'root',
            password : 'Praca2016?',
            database : 'TrenerDB'
        }
        ,prod : {
            host: 'localhost',
            user: 'root',
            password : 'Praca2016?',
            database : 'TrenerDB'
        }

    }

};

module.exports.mysqlConnectionString = mysqlConnectionString;


