const { baseColor, consoleColors } = require("./color-console");

class appLogger {

    errMessage ;
    logMessage ;

    error(err){

        this.errMessage = err;
        console.log(this.templateError);
    }

    log(info) {

        this.logMessage = info ;
        console.log(this.templatelog);

    }

    get templateError(){

        const error = baseColor['error'] +  
                      this.errMessage.stack + 
                      consoleColors.Reset ;
        return error;

    }

    get templatelog(){

        const log = baseColor['log'] + 
                    this.logMessage + 
                    consoleColors.Reset ;
        return log;

    }
}

module.exports = new appLogger