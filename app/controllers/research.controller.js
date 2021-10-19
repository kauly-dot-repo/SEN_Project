


const ResearchOutputs = require("../models/research.model.js");

// Create and Save a new Research Output
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
 console.log(req);
  // Create a Research Output
  const researchOutputs = new ResearchOutputs({
    //req.body.(the variable name you have in the front end)
    outputType: req.body.outputType,
    title: req.body.title,
    author: req.body.author,
    co_author: req.body.co_author,
    yearPublished: req.body.yearPublished
  });

  // Save Research Output in the database
  ResearchOutputs.create(researchOutputs, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Research Output."
      });
    else res.send(data);
  });
};

// Retrieve all Research Outputs from the database.
exports.findAll = (req, res) => {
  ResearchOutputs.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving research outputs."
      });
    else res.send(data);
  });
};

// Find a single Research Output with a researchOutputID
exports.findOne = (req, res) => {
  console.log(req.params);
  ResearchOutputs.findById(req.params.researchOutputID, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Research Outputs with id ${req.params.researchOutputID}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Research Output with id " + req.params.researchOutputID
        });
      }
    } else res.send(data);
  });
};

// Update a Research Output identified by the researchOutputID in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  ResearchOutputs.updateById(
    req.params.researchOutputID,
    new ResearchOutputs(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Research Outputs with id ${req.params.researchOutputID}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Research Output with id " + req.params.researchOutputID
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a ResearchOutputs with the specified researchOutputID in the request
exports.delete = (req, res) => {
  ResearchOutputs.remove(req.params.researchOutputID, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found ResearchOutputs with id ${req.params.researchOutputID}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete ResearchOutputs with id " + req.params.researchOutputID
        });
      }
    } else res.send({ message: `Research Output was deleted successfully!` });
  });
};

// Delete all ResearchOutputs from the database.
exports.deleteAll = (req, res) => {
  ResearchOutputs.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all research outputs."
      });
    else res.send({ message: `All Research Outputs were deleted successfully!` });
  });
};
