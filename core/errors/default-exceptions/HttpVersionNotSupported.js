const HttpStatus = require("../config/https-status-code");
const HttpException = require("../HttpException");

class HttpVersionNotSupportedException extends HttpException {

  constructor(response = 'Http Version Not Support') {
    super(HttpStatus.HttpVersionNotSupportedException, true, response);
  }
  
}

module.exports = HttpVersionNotSupportedException;
