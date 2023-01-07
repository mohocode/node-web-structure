const bcrypt = require('bcrypt');

class BcryptService {

    constructor() {}

    async hash(value, salt) {

        const hashValue = await bcrypt
            .hash(value, salt)
            .then(async function (hash) {
                return hash;
            });

        return hashValue;

    }

    async compareHash(value , hashValue) {

       return  await bcrypt.compare(value, hashValue);

    }




}

module.exports = new BcryptService;