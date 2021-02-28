const express = require('express');
const insertdataController = require('../controllers/insertdata');

const router = express.Router();

router.post('/add-student', insertdataController.addStudent);
router.post('/add-examslot', insertdataController.addExamslot);
router.post('/add-regexamslot', insertdataController.addRegExamslot);
module.exports = router;