const BadRequest = require("../errors/badrequest.error");
const NotImplemented = require("../errors/notImplemented.error");

function pingProblemController(req, res) {
  return res.json({ message: "Problem Controller is Working" });
}

function addProblem(req, res, next) {
  try {
    //nothing implemeneted
    throw new BadRequest("Problem Name", { missing: ["Problem name"] });
  } catch (error) {
    next(error);
  }
}

function getProblem(req, res, next) {
  try {
    throw new BadRequest("Problem Name", { missing: ["Problem name"] });
  } catch (error) {
    next(error);
  }
}

function getAllProblems(req, res) {}

function updateProblem(req, res) {}

function deleteProblem(req, res) {}

module.exports = {
  pingProblemController,
  addProblem,
  getProblem,
  getAllProblems,
  updateProblem,
  deleteProblem,
};
