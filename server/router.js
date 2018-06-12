const express = require('express');
const router = express.Router();
const controller = require('./Controller.js');

router.get('/fetch/:table', controller.fetch);
router.get('/getById', controller.getById);
router.get('/delete', controller.delete);
router.post('/post', controller.post);

module.exports = router;