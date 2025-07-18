const winston = require("winston");
require("winston-mongodb");
const { LOG_DB_URL } = require("./server.config");

const allowedTransports = [];
// const customColors = {
//   error: "bold red",
//   warn: "italic yellow",
//   info: "blue",
//   http: "magenta",
//   debug: "green",
// };

allowedTransports.push(
  new winston.transports.Console({
    format: winston.format.combine(
      //Colorize with custom colors
      winston.format.colorize(),

      //Timestamp format
      winston.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      }),
      //Log level format
      winston.format.printf(
        (log) =>
          `${log.timestamp}  [${log.level.toUpperCase()}]: ${log.message}`
      )
    ),
  })
);

//MongoDb transport
const mongoTransportOptions = {
  level: "info",
  db: LOG_DB_URL,
  collection: "logs",
};
allowedTransports.push(new winston.transports.MongoDB(mongoTransportOptions));

//File transport
allowedTransports.push(new winston.transports.File({
  filename: "app.log"
}))

//Default logger
const logger = winston.createLogger({
  format: winston.format.combine(
    //Colorize with custom colors
    // winston.format.colorize({
    //   all: true,
    //   colors: customColors,
    // }),

    //Timestamp format
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    //Log level format
    winston.format.printf(
      (log) =>
        `${log.timestamp}  [${log.level.toUpperCase()}]: ${log.message}`
    )
  ),


  transports: allowedTransports,
});

module.exports = logger;
