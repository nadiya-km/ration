const mongoose = require('mongoose');
const cardSchema = new mongoose.Schema(
	{
		cardNum: {
			type: String,
			required: true,
			unique: true,
		},
		cardType: {
			type: String,
			required: true,
			enum: ['APL', 'BPL', 'AAY'],
			default: 'APL',
		},
		status: {
			type: String,
			enum: ['ACTIVE', 'INACTIVE', 'BLOCKED'],
			default: 'ACTIVE',
		},
		headName: { type: String, required: true },
		headAadhar: {
			type: String,
			unique: true,
		},

		membersCount: {
			type: Number,
			default: 0,
		},

		members: [
			{
				name: {
					type: String,
					required: true,
				},
				age: {
					type: Number,
				},
				aadharNum: {
					type: String,
				},

				received: { type: Boolean, default: false },
			},
		],
		address: {
			type: String,
		},
	},
	{ timestamps: true }
);
cardSchema.pre('save', function () {
	this.membersCount = this.members.length;
});

module.exports = mongoose.model('Card', cardSchema);
