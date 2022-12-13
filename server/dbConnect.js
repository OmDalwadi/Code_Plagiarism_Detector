const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'm@y9h5H2',
    database: 'codeplagiarismdetector'
});


connection.connect((err) => {
    if (err) return err;
    console.log('Successfully connected to the MySQL server.');

    // Insert some data into the database.
    // const data = { name: 'John Doe', email: 'john.doe@example.com' };
    // insertData(data);
});


// // Close the connection to the MySQL server.
// connection.end((err) => {
//     if (err) return err;
//     console.log('Connection to the MySQL server was closed.');
// });

module.exports = { connection }