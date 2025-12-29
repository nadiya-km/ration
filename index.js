require('dotenv').config();
const express = require('express');
const app = express();
const connectdb = require('./config/db');
const authRoute = require('./router/auth');
const userRoute = require('./router/user');

app.set('view engine', 'ejs'); //ejs

//middleware
app.use(express.json());
app.use(express.urlencoded());

port = process.env.port || 5000; //port

// app.use('/admin', authRoute);
// app.use('/user', userRoute);
app.get('/', (req, res) => {
	return res.render('pages/home');
});
app.get('/user', (req, res) => {
	const user = [
		{
			name: 'nadiya',
			num: 20,
		},
	];
	// return res.json(user);
	return res.render('pages/user');
});
//404
app.use((req, res) => {
	return res.status(404).send('404 page not found!');
});

connectdb(); //start server
app.listen(3000, () => {
	console.log(`app is running on ${port}`);
});
