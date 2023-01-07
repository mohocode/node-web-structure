const Controller = require("../../../core/controller/controller");
const userModel = require("../../models/user.model");

class AuthController extends Controller {

    constructor() {
        super() ;
        this.Model = userModel;
    }

    signon(req, res, next) {

        this.validation(req , res);

    }
}

module.exports = new AuthController();