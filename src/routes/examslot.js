const express = require('express');
const examslotController = require('../controllers/examslot');

const router = express.Router();
router.get('/', examslotController.getExamslots);
router.get('/:courseid', examslotController.getExamslotByCourseId);


module.exports = router;