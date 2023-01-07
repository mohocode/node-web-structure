const HttpStatus = require("../config/https-status-code");
const HttpException = require("../HttpException");

class UnauthorizedException extends HttpException {

  constructor(response = 'Unauthorized') {
    super(HttpStatus.UNAUTHORIZED, true, response);
  }
  
}

module.exports = UnauthorizedException;
