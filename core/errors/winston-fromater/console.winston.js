const Transport = require('winston-transport');
const { baseColor, consoleColors } = require('../config/color-console');
module.exports = class AppConsoleTransport extends Transport {
    constructor() {
        super();
    }
    log = (info, callback) => {
        const { level, message, stack, timestamp } = info;
        console.log(
            `Winston ${baseColor[level]}${level} : ${message}\t${consoleColors.FgYellow}Timestamp${consoleColors.Reset} \ {${timestamp}}`,
             stack ? "\n" + stack : ""
        )
        if (callback) {
            callback();
        }
    };
}
