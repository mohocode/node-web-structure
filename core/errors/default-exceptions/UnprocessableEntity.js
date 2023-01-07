const HttpStatus = require("../config/https-status-code");
const HttpException = require("../HttpException");

class UnprocessableEntityException extends HttpException {

  constructor(response = 'Unprocessable Entity Exception') {
    super(HttpStatus.UNPROCESSABLE_ENTITY, true , response);
  }
  
}

module.exports = UnprocessableEntityException;
