const Admin = require('../models/Admin');

exports.homePage = async (req, res) => {
	await Admin.create({
		username: 'admin',
		password: '123',
	});
	return res.send('home page');
};
