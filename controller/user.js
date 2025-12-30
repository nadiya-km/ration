const Card = require('../models/Card');

exports.getAllMembers = async (req, res) => {
	try {
		const cards = await Card.find({}, 'members'); // fetch members only

		// Flatten all members
		const allMembers = cards.flatMap((card) => card.members);

		// Remove duplicates (by aadharNum if exists, else name+age)
		const seen = new Set();
		const uniqueMembers = allMembers.filter((member) => {
			const key = member.aadharNum || member.name + '-' + member.age;
			if (seen.has(key)) return false;
			seen.add(key);
			return true;
		});

		res.render('pages/user', { members: uniqueMembers });
	} catch (err) {
		console.error(err);
		res.status(500).send('Server Error');
	}
};
