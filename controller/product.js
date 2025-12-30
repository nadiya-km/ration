const Product = require('../models/Product');

// List all product
exports.getProducts = async (req, res) => {
	try {
		const products = await Product.find();
		res.render('pages/products/products', { products });
	} catch (err) {
		console.error(err);
		res.status(500).send('Server Error');
	}
};

// Render Add Product page
exports.addProductPage = (req, res) => {
	res.render('pages/products/add-product');
};

// Add Product POST
exports.addProduct = async (req, res) => {
	try {
		const { name, availableQty, unit, pricePerUnit } = req.body;
		const newProduct = new Product({
			name,
			availableQty,
			unit,
			pricePerUnit,
		});
		await newProduct.save();
		res.redirect('/admin/product');
	} catch (err) {
		console.error(err);
		res.status(500).send('Server Error');
	}
};
// exports.productDetails = async (req, res) => {
// 	try {
// 		const product = await Product.findById(req.params.id);
// 		if (!product) return res.status(404).send('Product not found');

// 		res.render('pages/products/product-details', { product });
// 	} catch (err) {
// 		console.error(err);
// 		res.status(500).send('Server Error');
// 	}
// };
exports.deleteProduct = async (req, res) => {
	try {
		await Product.findByIdAndDelete(req.params.id);
		res.redirect('/admin/product');
	} catch (err) {
		console.error(err);
		res.status(500).send('Delete failed');
	}
};

//get update product page
exports.getUpdateProduct = async (req, res) => {
	try {
		let productId = req.params.id;
		let product = await Product.findOne({ _id: productId });

		return res.render('pages/products/product-edit', { product });
	} catch (e) {
		console.log(e);
		return res.status(500).send('update page not found');
	}
};

// post
exports.updateProduct = async (req, res) => {
	try {
		const { productId, availableQty, pricePerUnit } = req.body;

		await Product.findByIdAndUpdate(
			productId,
			{
				availableQty,
				pricePerUnit,
			},
			{ new: true }
		);

		res.redirect('/admin/product');
	} catch (err) {
		console.error(err);
		res.status(500).send('Update failed');
	}
};
