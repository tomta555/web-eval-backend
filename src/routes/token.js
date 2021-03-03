const express = require('express');
const tokenController = require('../controllers/token');

const router = express.Router();
router.get('/', tokenController.getOauthTokens);
router.get('/:code', tokenController.getOauthToken);


module.exports = router;