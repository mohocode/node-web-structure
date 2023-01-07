const express = require('express');
const router = express.Router();
const authController = require('../../http/controllers/auth.controller');
const payloadTransformPipe = require('../../http/pipes/payload-transform.pipe');
const { RegisterValidator } = require('../../http/validations/register.validation');

// router.use((req , res , next) => {
//     res.locals.layout = "auth-master";
//     next();
// })



router.post(
    '/signon',  // $ --- Route::Name
    RegisterValidator, // $ --- Validation::Request::Body
    payloadTransformPipe.userRegisteration, // $ --- Sanitize Transform Data Body
    authController.signon // $ -- Controller::Method
);





module.exports = router; 