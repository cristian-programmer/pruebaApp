let mysql = require('mysql');

    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234'
    });

connection.connect((error)=>{
    if (error) throw error ;
    console.log(`connect to database`);
});

module.exports = {
    con: connection
};

