require('dotenv').config();
const config = require("config");
const path = require("path");
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
var expressLayouts = require("express-ejs-layouts");
const flash = require("connect-flash");
const passport = require("passport");
const methodOverride = require("method-override");
const i18n = require("i18n");
const helmet = require("helmet");
const appLocals = require("./app-locals");
const sessionSetting = require('./setting/session.setting');



class appConfiguration {
  app;

  constructor(app) {
    this.app = app;
    this.engine();
    this.http();
    this.i18n();
    this.local();
  }

  engine() {

    this.app.use(helmet());
    this.app.use(express.static("public"));
    this.app.use('/resources',express.static(__dirname + '/images'));
    this.app.set("view engine", "ejs");
    this.app.use(expressLayouts);
    this.app.set("layout extractScripts", true);
    this.app.set("views", path.resolve("./resource/views"));
    this.app.set("layout", "master");

  }

  http() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(methodOverride("_method"));
    this.app.use(session(sessionSetting));
    this.app.use(cookieParser(config.get('app.cookie_secretkey')));
    this.app.use(flash());
    this.app.use(passport.initialize());
    this.app.use(passport.session());
  }

  i18n() {
    i18n.configure({
      locales: ["en", "fa"],
      directory: config.layout.locales_directory,
      defaultLocale: "fa",
      cookie: "lang",
      objectNotation: true,
    });

    app.use(i18n.init);
  }

  local() {
    
    this.app.use((req, res, next) => {
      app.locals = new appLocals(req, res).getObjects();
      next();
    });

  }
}

module.exports = appConfiguration;
