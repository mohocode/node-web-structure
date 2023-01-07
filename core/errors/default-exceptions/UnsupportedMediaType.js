const HttpStatus = require("../config/https-status-code");
const HttpException = require("../HttpException");

class UnsupportedMediaTypeException extends HttpException {

  constructor(response = 'Unsupported Media Type') {
    super(HttpStatus.UNSUPPORTED_MEDIA_TYPE, true, response);
  }
  
}

module.exports = UnsupportedMediaTypeException;
