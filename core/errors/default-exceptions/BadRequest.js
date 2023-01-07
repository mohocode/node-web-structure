const HttpStatus = require("../config/https-status-code");
const HttpException = require("../HttpException");

class BadRequestException extends HttpException {

  constructor(response = 'Bad Request') {
    super(HttpStatus.BAD_REQUEST, true, response);
  }
  
}

module.exports = BadRequestException;
