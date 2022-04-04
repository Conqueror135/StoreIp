const ipRouter = require('./IpRouter');
const router = require('express').Router();

router.use('/ip', ipRouter);
module.exports = router;