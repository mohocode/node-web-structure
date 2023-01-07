const HttpStatus = require("../config/https-status-code");
const HttpException = require("../HttpException");

class GoneException extends HttpException {

  constructor(response = 'Gone Exception') {
    super(HttpStatus.BAD_REQUEST, true, response);
  }
  
}

module.exports = GoneException;
