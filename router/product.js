const express = require('express');
const router = express.Router();
const productController = require('../controller/product');

// Product list
router.get('/product', productController.getProducts);

// Add product page
router.get('/add-product', productController.addProductPage);

// Add product POST
router.post('/add-product', productController.addProduct);
//update
router.get('/products/edit/:id', productController.getUpdateProduct);
router.post('/products/update-product', productController.updateProduct);

// DELETE
router.get('/products/delete/:id', productController.deleteProduct);

module.exports = router;
