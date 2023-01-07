const HttpStatus = require("../config/https-status-code");
const HttpException = require("../HttpException");

class ForbiddenException extends HttpException {

  constructor(response = 'Forbidden') {
    super(HttpStatus.NOT_FOUND, true, response);
  }
  
}

module.exports = ForbiddenException;
