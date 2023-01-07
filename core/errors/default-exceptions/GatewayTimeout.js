const HttpStatus = require("../config/https-status-code");
const HttpException = require("../HttpException");

class GatewayTimeout extends HttpException {

  constructor(response = 'Gateway Timeout') {
    super(HttpStatus.GATEWAY_TIMEOUT, true, response);
  }
  
}

module.exports = ConflictException;
