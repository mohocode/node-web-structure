const HttpStatus = require("../config/https-status-code");
const HttpException = require("../HttpException");

class BadGatewayException extends HttpException {

  constructor(response = 'Bad Gateway') {
    super(HttpStatus.BAD_GATEWAY, true, response);
  }
  
}

module.exports = BadGatewayException;
