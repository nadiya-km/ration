const Card = require('../models/Card');
const User = require('../models/User');
const Product = require('../models/Product');

// List all cards
exports.getCards = async (req, res) => {
	try {
		const cards = await Card.find();
		res.render('pages/cards/card-list', { cards });
	} catch (err) {
		console.error(err);
		res.status(500).send('Server Error');
	}
};

// Render Add Card page
exports.addCardPage = (req, res) => {
	res.render('pages/cards/add-card');
};

// Add Card
exports.addCard = async (req, res) => {
	try {
		const { cardNum, headName, cardType, members, headAadhar } = req.body;

		const newCard = new Card({
			cardNum,
			headName,
			headAadhar,
			cardType,
			members,
		});

		await newCard.save();
		res.redirect('/admin/cards');
	} catch (err) {
		console.error(err);
		res.status(500).send(err.message);
	}
};

// Card Details (show allowed product / quota)
exports.cardDetails = async (req, res) => {
	try {
		const { id } = req.params;
		const card = await Card.findById(id);
		const users = await User.find({ cardId: id });
		const product = await Product.find();

		// Example: allowed quota based on card type
		let quota = {};
		if (card.cardType === 'APL') quota = { RICE: 5, WHEAT: 5, SUGAR: 2 };
		if (card.cardType === 'BPL') quota = { RICE: 10, WHEAT: 10, SUGAR: 5 };
		if (card.cardType === 'AAY') quota = { RICE: 15, WHEAT: 15, SUGAR: 10, KEROSENE: 5 };

		res.render('pages/cards/card-details', { card, users, product, allowedItems });
	} catch (err) {
		console.error(err);
		res.status(500).send('Server Error');
	}
};
