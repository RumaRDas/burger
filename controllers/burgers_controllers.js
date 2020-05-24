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
    burger.insertOne(req.body.name, function(result) {
      res.json({ id: result.insertId });
    });
  });