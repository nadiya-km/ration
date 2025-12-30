const Admin = require('../models/Admin');
const User = require('../models/User');
const Card = require('../models/Card');
const Product = require('../models/Product');
const jwt = require('jsonwebtoken');

exports.loginPage = (req, res) => {
	return res.render('pages/login');
};
exports.adminLogin = async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password)
			return res.render('pages/login', { msg: 'Email and Password required' });

		const admin = await Admin.findOne({ email });
		if (!admin) return res.status(404).render('pages/login', { msg: 'Admin not found' });

		const isValid = await admin.comparePassword(password);
		if (!isValid) return res.render('pages/login', { msg: 'Incorrect password' });

		// Create JWT
		const token = jwt.sign({ id: admin._id, role: admin.role }, process.env.JWT_SECRET, {
			expiresIn: '1d',
		});

		// send httpOnly cookie
		res
			.cookie('adminToken', token, { httpOnly: true, sameSite: 'lax' })
			.status(200)
			.redirect('/admin/cards');
	} catch (err) {
		console.log(err);
		res.render('pages/login', { msg: 'Something went wrong' });
	}
};
// Admin Logout

exports.adminLogout = (req, res) => {
	res.clearCookie('adminToken');
	res.redirect('/admin/login');
};
exports.homePage = async (req, res) => {
	// await Admin.create({
	// 	name: 'admin',
	// 	password: '123',
	// 	email: 'admin@123',
	// });
	// try {
	// 	if (!req.admin) {
	// 		return res.render('admin/login', { msg: 'admin not logged in' });
	// 	}
	// 	const totalUsers = await User.countDocuments();
	// 	const totalCards = await Card.countDocuments();
	// 	const totalitems = await Product.countDocuments();
	// 	return res.render('admin/dashboard', {
	// 		admin: req.admin,
	// 		stats: {
	// 			totalUsers,
	// 			totalCards,
	// 			totalitems,
	// 		},
	// 	});
	// } catch (e) {
	// 	console.log(e);
	// 	res.status(500).json({ message: 'Server error' });
	// }

	return res.render('pages/layout');
};
