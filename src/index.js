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

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port, ${PORT}`);

  // throw new BaseError(
  //   "Some Error Occurred",
  //   404,
  //   "Something went wrong",
  //   "Not connected to server"
  // );
});