const express = require('express');
const app = express();
const http = require('http');
const mongoose = require('mongoose');
const appConfiguration = require('./app-configuration');
require('dotenv').config();
const config = require('config');
const winston = require('winston');
const appLogger = require('../core/errors/config/app-logger');
const { isOperationalError } = require('./app-error-handler');

class Bootstrap {
  constructor() {
    require('../core/errors/winston');
    this.setupExpress();
    this.setMongoConnection();
    this.setConfig();
    this.setRouters();
  }

  setupExpress() {

    app.listen(config.get('server.port'), () => {
      appLogger.log(
        `Yout App Runing Litening On Port ${config.get('server.port')}`
      );
    });

    process.on('unhandledRejection', (error) => {
      throw error;
    });

    process.on('uncaughtException', (error) => {
      
      winston.error(error.message, error);
      if (!isOperationalError(error)) {
        process.exit(1);
      }

    });
  }

  setMongoConnection() {
    mongoose.set("strictQuery", false);
    mongoose
      .connect(config.get('database.URI'))
      .then(() => appLogger.log('Connected To Database ...'))
      .catch((err) => appLogger.error('Error List:', err));
  }

  setConfig() {
    new appConfiguration(app);
  }

  setRouters() {
    app.use(require('../app/routes/web'));
  }
  
}

module.exports = Bootstrap;
