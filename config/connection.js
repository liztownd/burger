const mysql = require('mysql');
const mysqlPass = require('../private/private.js')
const connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else {
connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: mysqlPass,
    database: 'burgers_db',
  });
}
  
  connection.connect((err) => {
    if (err) {
      console.error(`error connecting: ${err.stack}`);
      return;
    }
    console.log(`connected as id ${connection.threadId}`);
  });
  
  module.exports = connection;
  