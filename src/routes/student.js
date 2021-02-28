const express = require('express');
const studentController = require('../controllers/student');

const router = express.Router();
router.get('/', studentController.getStudents);
router.get('/:stdid', studentController.getStudentByStdId);


module.exports = router;