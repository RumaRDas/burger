const express = require("express");

const burger = require("../models/burger.js");

let router = express.Router();

router.get("/", function(req, res) {
    burger.all(function(data) {
     let burgerObj = {
        burger: data
      };
      console.log(burgerObj);
      res.render("index", burgerObj);
    });
  });