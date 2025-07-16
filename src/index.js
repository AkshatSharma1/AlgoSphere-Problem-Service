const express = require('express');
const bodyParser = require('body-parser');


const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");
const BaseError = require("./errors/base.error");
const errorHandler = require("./utils/error.handler");

const app = express();

//initial setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use("/api", apiRouter);

//Ping check
app.get("/ping", (req, res) => {
  return res.json({ message: "Problem Service is Active" });
});

//If any api is not hit, then our custom error handler api will hit. It fit is not created, then express default error handler will hit. This will also hit if custom errorHandler is not able to cater to lets say any unknown error
app.use(errorHandler);

//Note: if we use this errorHandler lets say on top, and we have 4 params in function errorHandler(err, req,res, next) then its a errorhandler but if it has 3 params then its a normal middleware and it can and cannot act as errorHandler.

app.listen(PORT, () => {
  console.log(`Server started on port, ${PORT}`);

  // throw new BaseError(
  //   "Some Error Occurred",
  //   404,
  //   "Something went wrong",
  //   "Not connected to server"
  // );
});