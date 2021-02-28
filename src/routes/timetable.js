const express = require('express');
const timetableController = require('../controllers/timetable');

const router = express.Router();
router.get('/', timetableController.getStudentTimetable);
router.get('/:stdid', timetableController.getStudentTimetableByStdId);


module.exports = router;