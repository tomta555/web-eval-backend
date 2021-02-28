const express = require('express');
const insertdataRoutes = require('./insertdata');
const studentRoutes = require('./student');
const examslotRoutes = require('./examslot');
const timetableRoutes = require('./timetable');

const router = express.Router();

router.use('/student', studentRoutes);
router.use('/examslot', examslotRoutes);
router.use('/insertdata', insertdataRoutes);
router.use('/timetable', timetableRoutes);


module.exports = router;