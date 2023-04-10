const express = require('express');
const router = express.Router();

const homepageController = require('../controllers/Homepage');

router.use('/', homepageController);

module.exports = router;