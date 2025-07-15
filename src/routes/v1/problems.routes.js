const express = require('express');

const {ProblemController} = require('../../controllers')

const problemRouter = express.Router();

problemRouter.get('/ping', ProblemController.pingProblemController);
problemRouter.get('/:id', ProblemController.getProblem);
problemRouter.get('/', ProblemController.getAllProblems);
problemRouter.post('/', ProblemController.addProblem);
problemRouter.put('/:id', ProblemController.updateProblem);
problemRouter.delete('/:id', ProblemController.deletedProblem);


module.exports = problemRouter;
