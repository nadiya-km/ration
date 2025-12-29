const mongoose = require('mongoose');
const productSchema = new mongoose({
	name: {
		type: String,
		required: String,
	},
	quantity: {
		type: Number,
		required: true,
	},
	cash: {
		type: Number,
		required: true,
	},
});
module.exports = mongoose.model('Product', productSchema);
