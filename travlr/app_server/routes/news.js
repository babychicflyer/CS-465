const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');

router.get('/', ctrlMain.news);

module.exports = router;