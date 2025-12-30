const express = require('express');
const router = express.Router();
const { getCards, addCardPage, addCard, cardDetails } = require('../controller/card');
const { isAdmin } = require('../middleware/admin');

// Add Card page
router.get('/add-card', isAdmin, addCardPage);
router.post('/add-card', isAdmin, addCard);

// List all cards
router.get('/cards', isAdmin, getCards);

// Card Details page (dynamic route)
router.get('/card/:id', isAdmin, cardDetails);

module.exports = router;
