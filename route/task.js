const express = require('express');
const router = express.Router();

const TaskController = require('../controllers/Tasks');

router.post('/new-task', TaskController.add);
router.put('/:id', TaskController.edit);
router.delete('/:id', TaskController.delete);
router.use('/:id/detail', TaskController.getDetail);
router.use('/', TaskController.index);

module.exports = router;