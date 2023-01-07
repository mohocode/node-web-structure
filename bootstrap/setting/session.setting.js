const { default: mongoose } = require("mongoose");
const session = require('express-session');
const MongoStore = require("connect-mongo");

module.exports = {
    name : 'session_rocket',
    secret : process.env.SESSION_SECRET_KEY,
    resave : true,
    saveUninitialized : true,
    cookie : {  
      expires : new Date(Date.now() + 1000 * 60 * 60 * 6)
      // maxAge : new Date(Date.now() + 1000 * 60 * 60 * 6)
    },
    store : MongoStore.create({
      mongoUrl: process.env.mongoDB_URI,
    }),
  }