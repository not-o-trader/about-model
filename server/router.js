const express = require('express');
const router = express.Router();
const controller = require('./Controller.js');

router.get('/fetch/:table', controller.fetch);
router.get('/getById', controller.getById);

module.exports = router;