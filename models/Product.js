const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			enum: ['RICE', 'WHEAT', 'SUGAR', 'KEROSENE'],
			unique: true,
		},
		availableQty: {
			type: Number,
			required: true,
			min: 0,
		},
		pricePerUnit: {
			type: Number,
			required: true,
			min: 0,
		},
		unit: {
			type: String,
			enum: ['KG', 'LITRE'],
			required: true,
		},
		status: {
			type: String,
			enum: ['Active', 'inActive'],
			default: 'Active',
		},

		availability: {
			type: String,
			enum: ['available', 'out_of_stock'],
			default: 'available',
		},
	},
	{ timestamps: true }
);
productSchema.pre('save', function (next) {
	this.availability = this.availableQty > 0 ? 'available' : 'out_of_stock';
});

module.exports = mongoose.model('Product', productSchema);
