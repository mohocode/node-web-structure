const { default: mongoose } = require("mongoose");
const ObjectId = require("mongoose").Types.ObjectId;

class BaseMognoDbTrait {

    ObjectID(id) {
        return new mongoose.mongo.ObjectId(id);
      }
}

module.exports = BaseMognoDbTrait ;