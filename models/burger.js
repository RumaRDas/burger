
//Import the ORM to create functions that will interact with the database.

var orm = require("../config/orm.js");

let burger = {
  sellectAll: function () {
    return orm.sellectAll("burgers")
  },
  // The variables cols and vals are arrays.
  insertOne: function (cols, vals) {
    return orm.insertOne("burgers", cols, vals)
  },

  updateOne: function (objColVals, condition) {
    return orm.updateOne("burgers", objColVals, condition)
  },

  delete: function (condition) {
    return orm.delete("burgers", condition)
  }

};

module.exports = burger;