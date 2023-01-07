const { body, check, oneOf, validationResult } = require('express-validator');
const { WithSpace, MobileValidation } = require('./global.validations');

module.exports.RegisterValidator =
    [
        check('firstname')
            .notEmpty()
            .withMessage('وارد کردن نام الزامیست'),

        check('lastname')
            .notEmpty()
            .withMessage('وارد کردن نام خانوادگی الزامیست'),

        check('password')
            .notEmpty()
            .withMessage('وارد کردم رمز عبور الزامیست')

            .bail()

            .isLength({ min: 6 })
            .withMessage('حداقل کارکتر مجاز برای رمز عبور 6 عدد میباشد'),

        check('username')
            .notEmpty()
            .withMessage('وارد کردن نام کاربری الزامیست')

            // .bail()

            // .custom(WithSpace)
            // .withMessage('وارد کردن فاصله بین کاراکتر های نام کاربری مجاز نیست.')

            // .bail()

            // .matches(MobileValidation)
            // .withMessage('شماره تلفن موبایل بدرستی وارد نشده است.'),

    ];
