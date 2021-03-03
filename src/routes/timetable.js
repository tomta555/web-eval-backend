const express = require('express');
const timetableController = require('../controllers/timetable');

const router = express.Router();
router.get('/', timetableController.getStudentTimetable);
router.get('/token/:code', timetableController.getOauthToken);
router.get('/stdid/:token', timetableController.getStudentId);


module.exports = router;