require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const connectdb = require('./config/db');
const { homePage } = require('./controller/admin');

const adminRoute = require('./router/admin');
const userRoute = require('./router/user');
const cardRoute = require('./router/card');
const productRoute = require('./router/product');

app.set('view engine', 'ejs'); //ejs

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

port = process.env.PORT || 5000; //port

app.use('/admin', adminRoute);
app.use('/admin', userRoute);
app.use('/admin', cardRoute);
app.use('/admin', productRoute);

app.get('/', (req, res) => {
	return res.render('pages/layout');
});
app.get('/dashb', (req, res) => {
	return res.render('pages/dashboard');
});

// app.get('/card', (req, res) => {
// 	return res.render('pages/cards/add-card');
// });
//404
app.use((req, res) => {
	return res.status(404).render('pages/not-found');
});

connectdb(); //start server
app.listen(port, () => {
	console.log(`app is running on ${port}`);
});
