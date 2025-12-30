const stockLogSchema = new mongoose.Schema(
	{
		productId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Product',
		},

		changeType: {
			type: String,
			enum: ['IN', 'OUT'],
		},

		quantity: Number,

		reference: {
			type: String, // Distribution ID / Purchase
		},

		adminId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Admin',
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('StockLog', stockLogSchema);
