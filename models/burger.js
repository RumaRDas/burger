
//Import the ORM to create functions that will interact with the database.

var orm = require("../config/orm.js");

let burger = {
    sellectAll: function(cb) {
    orm.sellectAll("burgers", function(res) {
      cb(res);
    });
  },
 // The variables cols and vals are arrays.
 insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

}

module.exports = burger;