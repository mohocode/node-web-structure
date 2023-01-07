const HttpStatus = require("./config/https-status-code");

class HttpException extends Error {

    constructor(
        statusCode = HttpStatus.INTERNAL_SERVER_ERROR,
        isOperational,
        response
    ) {
        super(response)
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = '';
        this.statusCode = statusCode
        this.isOperational = isOperational
        Error.captureStackTrace(this);
    }

}

module.exports = HttpException