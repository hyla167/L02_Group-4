const express = require('express');
const router = express.Router();

const loginController = require('../controllers/Login');

router.use('/', loginController);

module.exports = router;