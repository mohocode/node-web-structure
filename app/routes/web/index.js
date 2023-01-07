const express = require('express');
const { AppErrorHandler } = require('../../../bootstrap/app-error-handler');
const router = express.Router();
const authRouter = require('./auth.route');

/**
 * @ :::::| Home Route |:::::
 */
router.get('/', (req, res, next) => {
  return res.json('asdasd')
});

/**
 * @ :::::| Auth Route |:::::
*/
router.use('/auth', authRouter);



router.all('*', AppErrorHandler.catchError);

router.use(AppErrorHandler.errorHandler);

module.exports = router;
