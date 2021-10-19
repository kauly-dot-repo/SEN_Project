const sql = require("./db.js");

// constructor
const ResearchOutputs = function(researchOutputs) {
  this.outputType = researchOutputs.outputType;
  this.title = researchOutputs.title;
  this.author = researchOutputs.author;
  this.co_author = researchOutputs.co_author;
  this.yearPublished = researchOutputs.yearPublished;
};

ResearchOutputs.create = (newResearchOutput, result) => {
  sql.query("INSERT INTO researchOutputs SET ?", newResearchOutput, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log(result);
    console.log("created research outputs: ", { id: res.insertId, ...newResearchOutput });
    result(null, { id: res.insertId, ...newResearchOutput });
  });
};

ResearchOutputs.findById = (researchOutputID, result) => {
  sql.query(`SELECT * FROM researchOutputs WHERE id = ${researchOutputID}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found research outputs: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Research Outputs with the id
    result({ kind: "not_found" }, null);
  });
};

ResearchOutputs.getAll = result => {
  sql.query("SELECT * FROM researchOutputs", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("research outputs: ", res);
    result(null, res);
  });
};

ResearchOutputs.updateById = (id, researchOutputs, result) => {
  sql.query(
    "UPDATE researchOutputs SET email = ?, name = ?, active = ? WHERE id = ?",
    [researchOutputs.email, researchOutputs.name, researchOutputs.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Research Outputs with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated research outputs: ", { id: id, ...researchOutputs });
      result(null, { id: id, ...researchOutputs });
    }
  );
};

ResearchOutputs.remove = (id, result) => {
  sql.query("DELETE FROM researchOutputs WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Research Outputs with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted research outputs with id: ", id);
    result(null, res);
  });
};

ResearchOutputs.removeAll = result => {
  sql.query("DELETE FROM researchOutputs", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} research outputs`);
    result(null, res);
  });
};

module.exports = ResearchOutputs;
