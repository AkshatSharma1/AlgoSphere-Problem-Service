const { problemModel } = require("../models");

const NotFound = require("../errors/notfound.error");
const logger = require("../config/logger.config");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await problemModel.create({
        title: problemData.title,
        description: problemData.description,
        difficulty: problemData.difficulty,
        testCases: problemData.testCases ? problemData.testCases : [],
      });
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProblem(id) {
    try {
      const problem = await problemModel.findOne({ id });

      if (!problem) {
        logger.warn(`Problem with id: ${id} doesnot exist in db`);
        throw new NotFound("Problem", id);
      }
      return problem;
    } catch (error) {
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = await problemModel.find({});
      return problems;
    } catch (error) {
      throw error;
    }
  }

  async updateProblem(id, problemData) {
    try {
      const problem = await problemModel.findByIdAndUpdate(id, problemData, {
        new: true,
      });
      if (!updatedProblem) {
        logger.warn(`Problem with ${id} not found in db`);
        throw new NotFound("Problem", id);
      }
      return problem;
    } catch (error) {
      throw error;
    }
  }

  async deleteProblem(id) {
    try {
      const deletedProblem = await problemModel.findByIdAndDelete(id);
      if (!deletedProblem) {
        logger.info(`Problem with ${id} not found in db`);
        throw new NotFound("Problem", id);
      }
      return deletedProblem;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProblemRepository;
