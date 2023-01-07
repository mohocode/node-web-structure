const HttpStatus = require("../config/https-status-code");
const HttpException = require("../HttpException");

class InternalServerErrorException extends HttpException {

  constructor(response = 'Internal Server Error') {
    super(HttpStatus.InternalServerErrorException, true, response);
  }
  
}

module.exports = InternalServerErrorException;
