const express = require('express');
const insertdataRoutes = require('./insertdata');
const studentRoutes = require('./student');
const examslotRoutes = require('./examslot');
const studentpackRoutes = require('./studentpack');
const tokenRoutes = require('./token');
const stdidRoutes = require('./stdid');

const router = express.Router();

router.use('/student', studentRoutes);
router.use('/examslot', examslotRoutes);
router.use('/insertdata', insertdataRoutes);
router.use('/timetable',studentpackRoutes);
router.use('/token',tokenRoutes);
router.use('/stdid',stdidRoutes);


module.exports = router;