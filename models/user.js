const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	aadharnum: {
		type: Number,
		required: true,
		unique: true,
		length: 12,
	},
	houseNum: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		enum: ['head', 'member'],
		default: 'member',
	},
	cardId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Card',
		required: true,
	},

	// status: {
	// 	type: String,
	// 	enum: ['active', 'blocked'],
	// 	default: 'active',
	// },
});
module.exports = mongoose.model('User', userSchema);
