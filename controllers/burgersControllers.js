const express = require("express");

// Import the model (burgers.js) to use its database functions.
const burger = require("../models/burger.js");

let router = express.Router();

router.get("/", function(req, res) {
    burger.sellectAll()
    .then(burgers =>{
      console.log(burgers);
      res.render("index", {burgers});
    });
    });

  router.post("/api/burgers", function(req, res) {
    console.log(req.body.burger_name);
    burger.insertOne("burger_name",req.body.burger_name).then(result =>{
      res.json({ id: result.insertId });
    })    
  });

  router.put("/api/burgers/:id", function(req, res) {
   let data = { devoured : req.body.devoured === 'true'}
    let condition = {id: req.params.id};
  
    console.log("condition", condition);
  
    burger.updateOne(data, condition) 
    .then(result =>{
      if (result.changedRows ==0){
        res.status(404).end();
      }else{
        res.status(202).end();
      }
    });
  });
     
  router.delete("/api/burgers/:id", function(req,res){
    let condition = {id: req.params.id};
    burger.delete(condition)
    .then(result => {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        res.status(404).end();
      }
      else {
        res.status(200).end();
      }
    });
  });

  module.exports = router;