var orm = require("../config/orm.js");

let burger = {
    sellectAll: function(cb) {
    orm.sellectAll("burgers", function(res) {
      cb(res);
    });
  },
}

module.exports = burger;