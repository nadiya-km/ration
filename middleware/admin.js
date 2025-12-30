const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

exports.isAdmin = async (req, res, next) => {
	const token = req.cookies.adminToken;

	if (!token) {
		return res.status(401).render('pages/login', { msg: 'admin not logged in' });
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		const admin = await Admin.findById(decoded.id);
		if (!admin) {
			return res.status(403).render('login', { msg: 'Access denied' });
		}

		req.admin = admin;
		next();
	} catch (err) {
		return res.status(401).render('login', { msg: 'Invalid Token' });
	}
};
// itemschema.pre('save', function (next) {
// 	this.availability = this.availableQty > 0 ? 'available' : 'out_of_stock';
// 	next();
// });
