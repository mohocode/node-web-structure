const { UserCollection } = require("../schema/user.schema");
const trait = require('../../core/mixin/model.mixin');
const BaseMognoDbTrait = require("../traits/base-mongodb.trait");

class User extends trait([
    BaseMognoDbTrait
]) {

    constructor() {
        super(UserCollection);
    }

}

module.exports = new User;