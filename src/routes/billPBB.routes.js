module.exports = app => {
    const billsPBB = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all Tutorials
    router.get("/:id", tutorials.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tutorials.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);
  
    // Delete all Tutorials
    router.delete("/", tutorials.deleteAll);
  
    app.use('/api/tutorials', router);
  };