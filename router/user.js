const express = require('express');
const router = express.Router();

const { userPage } = require('../controller/addUser');

router.route('/userList').get(userPage);
