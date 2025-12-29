const mongoose = require('mongoose');
const AdminSchema = new mongoose({
	username: {
		type: String,
		required: true,
	},
	password: String,
	required: true,
});
module.exports = mongoose.model('Admin', AdminSchema);
