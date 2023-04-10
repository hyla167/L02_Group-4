const express = require('express');
const router = express.Router();

const StaffController = require('../controllers/Staffs');


router.get('/:id', StaffController.getDetail);
router.put('/:id', StaffController.edit);
router.delete('/:id', StaffController.delete);
router.get('/', StaffController.index);

module.exports = router;