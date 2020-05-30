// Set up MySQL connection.
var mysql = require("mysql");
var util = require("util");


var connection = mysql.createConnection({
  host: "musicdb-g4.cykqhanvgs0f.ap-southeast-2.rds.amazonaws.com",
  port: 3306,
  user: "admin",
  password: process.env.SECRET_PASSWORD,
  database: "burgers_db"
});

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Promises forever!
connection.query = util.promisify(connection.query);
// Export connection for our ORM to use.
module.exports = connection;
