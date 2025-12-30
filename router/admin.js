const express = require('express');
const router = express.Router();
const { homePage, adminLogin, loginPage, adminLogout } = require('../controller/admin');
const { isAdmin } = require('../middleware/admin');
// const { isAdmin } = require('../middleware/admin');

// router.route('/home').get(homePage); //for testing get only
router.get('/home', isAdmin, homePage);

router.get('/login', loginPage);
router.post('/login', adminLogin);
router.get('/logout', adminLogout);

module.exports = router;
