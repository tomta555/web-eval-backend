const express = require('express');
const studentpackController = require('../controllers/studentpack');

const router = express.Router();
router.get('/', studentpackController.getTimetable);
router.get('/:stdid', studentpackController.getTimetableByStdId);


module.exports = router;