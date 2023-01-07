const HttpStatus = require("../config/https-status-code");
const HttpException = require("../HttpException");

class ServiceUnavailableException extends HttpException {

  constructor(response = 'Service Unavailable') {
    super(HttpStatus.SERVICE_UNAVAILABLE, true, response);
  }
  
}

module.exports = ServiceUnavailableException;
