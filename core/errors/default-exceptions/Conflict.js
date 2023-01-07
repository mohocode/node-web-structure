const HttpStatus = require("../config/https-status-code");
const HttpException = require("../HttpException");

class ConflictException extends HttpException {

  constructor(response = 'Conflict Data') {
    super(HttpStatus.CONFLICT, true, response);
  }
  
}

module.exports = ConflictException;
