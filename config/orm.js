// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  sellectAll: function (table) {
    var queryString = "SELECT * FROM ??";
    return connection.query(queryString, [table]);
  },

  insertOne: function (table, cols, vals) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    return connection.query(queryString, [table, cols, vals]);
  },

  updateOne: function (table, objColVals, condition) {
    var queryString = "UPDATE ?? SET ? WHERE ?";
    return connection.query(queryString, [table, objColVals, condition])
  },

  delete:  function(table, condition) {
    var queryString = "DELETE FROM ?? WHERE ?";
    console.log( condition);
    return connection.query(queryString, [table, condition]);
  }

}

module.exports = orm;