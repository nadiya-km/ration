const entitlementSchema = new mongoose.Schema({
	cardType: {
		type: String,
		enum: ['APL', 'BPL', 'AAY'],
	},

	productId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Product',
	},

	perPersonQty: Number,

	maxQty: Number,
});

module.exports = mongoose.model('Entitlement', entitlementSchema);
