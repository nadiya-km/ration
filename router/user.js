const express = require('express');
const router = express.Router();

const { userPage, getAllMembers } = require('../controller/user');

router.route('/users').get(getAllMembers);
module.exports = router;
