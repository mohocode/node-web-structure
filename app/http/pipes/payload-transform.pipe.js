const { clearSpace } = require("../../common/util/helpers.uitl");
const bcryptService = require("../../services/bcrypt.service");

class PayloadTransformPipe {

    decryptData(request, response, next) {
      console.log(request.body);
    }

    async userRegisteration(request, response, next){

      const { firstname , lastname , username , password } = request.body ;


      const payload = {
        fistname: clearSpace(firstname),
        lastname: clearSpace(lastname),
        username: clearSpace(username),
        password: clearSpace(password),
        passHash: await bcryptService.hash(clearSpace(password), 12)
      }

      request.body = payload;
      next()

    }

    userloggin(request, response, next) {}
    getUserByParamId(request, response, next) {}
    getProductByParamId(request, response, next) {}

  }

  module.exports = new PayloadTransformPipe ;