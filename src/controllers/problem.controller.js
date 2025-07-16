const BadRequest = require("../errors/badrequest.error");
const NotImplemented = require("../errors/notImplemented.error");

function pingProblemController(req, res) {
  return res.json({ message: "Problem Controller is Working" });
}

function addProblem(req, res, next) {
  try {
    //nothing implemeneted
    throw new NotImplemented("Add Problem");
  } catch (error) {
    next(error);
  }
}

function getProblem(req, res, next) {
  try {
    //nothing implemeneted
    throw new NotImplemented("Add Problem");
  } catch (error) {
    next(error);
  }
}

function getAllProblems(req, res) {
  try {
    //nothing implemeneted
    throw new NotImplemented("Add Problem");
  } catch (error) {
    next(error);
  }
}

function updateProblem(req, res) {
  try {
    //nothing implemeneted
    throw new NotImplemented("Add Problem");
  } catch (error) {
    next(error);
  }
}

function deleteProblem(req, res) {
  try {
    //nothing implemeneted
    throw new NotImplemented("Add Problem");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  pingProblemController,
  addProblem,
  getProblem,
  getAllProblems,
  updateProblem,
  deleteProblem,
};
