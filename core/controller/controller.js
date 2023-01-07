const autoBind = require('auto-bind');
const { removeTags, encodeHTML } = require('../../app/common/util/helpers.uitl');
const { validationResult } = require("express-validator");
const UnprocessableEntityException = require('../errors/default-exceptions/UnprocessableEntity');
const NotFoundException = require('../errors/default-exceptions/NotFound');

class Controller {

  constructor() {
    // super();
    autoBind(this);
  }

  jsonResponse(
    res, code, message
  ) {
    return res.status(code).json({ message })
  }

  sanitizeField(data) {
    data = this.stripTags(data);
    return data;
  }

  validation(req, res) {

    let data = [];

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      errors.array().forEach((err) => {
        data.push(err.msg)
      })
      
      res.status(422).json({
        error : data
      });

    }

    return true;

  }

  validationFlashResponse(req) {

    const errors = validationResult(req);

    let message = [];

    if (!errors.isEmpty()) {
      errors.array().forEach((err) => {
        message.push(err.msg);
      });

      const templateError =  {
        error : message
      }

      req.flash("errors", templateError);
    }

  }

  flash(req, message) {
    req.flash('success', message);
  }

  redirect(res) {
    res.redirect(redirect ? redirect : '/');
  }

  stripTags(data) {
    data = removeTags(data); // $ Remove tags HTML (
    data = encodeHTML(data); // disable HTML tags
    return data;
  }



}

module.exports = Controller;