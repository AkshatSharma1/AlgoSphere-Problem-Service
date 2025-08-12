const express = require('express');

const { problemController } = require("../../controllers");
const { validateProblem } = require("../../validators/problem.validator");

const problemRouter = express.Router();

problemRouter.get("/ping", problemController.pingProblemController);
problemRouter.get("/:id", problemController.getProblem);
problemRouter.get("/", problemController.getAllProblems);
problemRouter.post("/", validateProblem, problemController.addProblem);
problemRouter.put("/:id", validateProblem, problemController.updateProblem);
problemRouter.delete("/:id", problemController.deleteProblem);


module.exports = problemRouter;
