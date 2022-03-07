const express = require('express');
const router = express.Router();
const userAPIController = require('../../controller/api/userAPIController');

router.get('/', userAPIController.userList);

router.get('/totalusers', userAPIController.totalusers);

module.exports = router;