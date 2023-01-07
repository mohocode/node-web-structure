const winston = require("winston");
const { format, RejectionHandler } = require("winston");
const { combine, timestamp, label, prettyPrint } = format;
const AppConsoleTransport = require("./winston-fromater/console.winston");

const logger = winston.createLogger({
  format: combine(label({ label: "right meow!" }), timestamp(), prettyPrint()),
  transports: [new winston.transports.File({ filename: "logs/error.log" })],

  exceptionHandlers: [
    new winston.transports.File({ filename: "logs/exceptions.log" }),
  ], //

  rejectionHandlers: [
    new winston.transports.File({ filename: "logs/rejections.log" }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(new AppConsoleTransport());
}

winston.add(logger);

module.exports = logger;
