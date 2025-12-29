const express = require('express');
const router = express.Router();
const { homePage } = require('../controller/auth');

router.route('/home').get(homePage); //for testing get only
