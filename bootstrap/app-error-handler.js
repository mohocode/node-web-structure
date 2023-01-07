const NotFoundException = require("../core/errors/default-exceptions/NotFound");
const UnprocessableEntityException = require("../core/errors/default-exceptions/UnprocessableEntity");
const HttpException = require("../core/errors/HttpException");

class AppErrorHandler {
  async catchError(req, res, next) {
    try {
      res.statusCode = 404;
      let error = new Error();
      error.status = 404;
      error.message = "Not Found";
      throw error;
    } catch (err) {
      next(err);
    }
  }

  async errorHandler(err, req, res, next) {
    if (err instanceof NotFoundException) {
      return this.templateError(res, err);
    }

    if (err instanceof UnprocessableEntityException) {
      return this.templateError(res, err);
    }

    appLogger.error(err); // Log Error In Console ::

    return this.templateError(res, err);
  }

  templateError(response, error) {
    return response.status(error.statusCode || 500).json({
      error: {
        message: error.message,
      },
    });
  }
}

function isOperationalError(error) {
  if (error instanceof HttpException) {
    return error.isOperational;
  }
  return false;
}

module.exports.isOperationalError = isOperationalError;
module.exports.AppErrorHandler = new AppErrorHandler();
