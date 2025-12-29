const mongoose = require('mongoose');
async function connectdb() {
	try {
		await mongoose.connect(process.env.db);
		console.log('db connected successfuly!');
	} catch (e) {
		console.log(e);
		console.log('db connection failed!');
	}
}
module.exports = connectdb;
