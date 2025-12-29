const mongoose = require('mongoose');
const userSchema = new mongoose({
	username: {
		type: String,
		required: String,
	},
	houseNum: {
		type: String,
		required: true,
	},
	aadharnum: {
		type: Number,
		required: true,
	},
});
module.exports = mongoose.model('User', userSchema);
