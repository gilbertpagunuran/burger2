// var express = require("express");

// var router = express.Router();

// Import the model (burger.js) to use its database functions.
// var burger = require("../models/burger.js"); //commented orm reference

var db = require("../models");  // sequelize?

module.exports = function(app) {
// Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
  // burger.all(function(data) {
  //   var hbsObject = {
  //     burgers: data
  //   };
  //   console.log(hbsObject);
  //   res.render("index", hbsObject);
  // });
  app.get("/", function(req, res) {
   db.Burger.findAll({}).then(function(dbBurger) {
      // We have access to the burgers as an argument inside of the callback function
      // res.json(dbBurger);
      var hbsObject = {burgers: dbBurger};
      console.log(hbsObject);
      res.render("index", hbsObject);
    });

  });

  app.post("/", function(req, res) {
  // burger.insertOne([
  //   "burger_name"
  // ], [
  //   req.body.name
  // ], function() {
  //   res.redirect("/");
  // });

      console.log(req.body);
    db.Burger.create({
      burger_name: req.body.name
    })
    .then(function(dbBurger) {
      res.redirect("/");
    });

  });

// router.put("/:id", function(req, res) {
  app.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
    console.log(`req.body.eaten= ${req.body.eaten}`);
    console.log(`req.params.eaten= ${req.params.eaten}`);
  // burger.updateOne({devoured: req.body.eaten}, condition, function() {
  //   res.redirect("/");
  // });

    db.Burger.update(
    {
      devoured: req.body.eaten
    }, 
    {where: {id: req.params.id}}
    ).then(function(dbBurger) {
      // res.json(dbBurger);
      res.redirect("/");
    });

  });

// Export routes for server.js to use.
// module.exports = router;
};