const HttpStatus = require("../config/https-status-code");
const HttpException = require("../HttpException");

class NotFoundException extends HttpException {

  constructor(response = 'Not found') {
    super(HttpStatus.NOT_FOUND, true, response);
  }
  
}

module.exports = NotFoundException;
