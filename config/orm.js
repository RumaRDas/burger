// Import MySQL connection.
var connection = require("../config/connection.js");

// * `selectAll()`
// * `insertOne()`
// * `updateOne()`
// Export the ORM object in `module.exports`

var orm = {

    sellectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },



}

module.exports = orm;