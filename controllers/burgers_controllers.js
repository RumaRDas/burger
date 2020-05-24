const express = require("express");

const burger = require("../models/burger.js");

let router = express.Router();

router.get("/", function(req, res) {
    burger.sellectAll(function(data) {
     let burgerObj = {
        burger: data
      };
      console.log(burgerObj);
      res.render("index", burgerObj);
    });
  });

  router.post("/api/burgers", function(req, res) {
    console.log(req.body.name);
    burger.insertOne(req.body.name, function(result) {
      res.json({ id: result.insertId });
    });
  });

  router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne("Devoured = true", condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  module.exports = router;