
const sessionSetting = require("../bootstrap/setting/session.setting");

module.exports = {

  server : {
    port : process.env.SERVER_PORT,
  } ,

  layout : {
    locales_directory : './app/locales',
    view_dir : ''
  },

  app : {
    cookie_secretkey : 'SecretKey' ,
    session : {}
  },

  database : {
    URI : process.env.mongoDB_URI
  } ,

  upload : {
    path : process.env.UPLOAD_PATH
  }
  
}