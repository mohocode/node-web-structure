const HttpStatus = require("../config/https-status-code");
const HttpException = require("../HttpException");

class PayloadToLargeException extends HttpException {

  constructor(response = 'Payload To Large') {
    super(HttpStatus.InternalServerErrorException, true, response);
  }
  
}

module.exports = PayloadToLargeException;
