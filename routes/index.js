const express = require('express');

const router = express.Router();

router.use('/locations', require('./locations'));

module.exports = router;
