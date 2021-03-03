const express = require('express');
const stdidController = require('../controllers/stdid');

const router = express.Router();
router.get('/', stdidController.getStudentIds );
router.get('/:token', stdidController.getStudentId );


module.exports = router;