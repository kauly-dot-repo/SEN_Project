const { Router } = require("express");

module.exports = app => {
  const researchOutputs = require("../controllers/research.controller.js");
  const fileController = require("../controllers/file.controller.js");


  // Create a new Users
  app.post("/researchOutputss", researchOutputs.create);

  // Retrieve all Users
  app.get("/researchOutputs", researchOutputs.findAll);

  // Retrieve a single Users with researchOutputsID
  app.get("/researchOutputs/:researchOutputsID", researchOutputs.findOne);

  // Update a Users with researchOutputsID
  app.put("/researchOutputs/:researchOutputsID", researchOutputs.update);

  // Delete a Users with researchOutputsID
  app.delete("/researchOutputs/:researchOutputsID", researchOutputs.delete);

  // Create a new Users
  app.delete("/researchOutputs", researchOutputs.deleteAll);

  //Controlling file upload and download
  app.post("/upload", fileController.upload);
  app.get("/files", fileController.getListFiles);
  app.get("/files/:name", fileController.download);
};
