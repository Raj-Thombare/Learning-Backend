const express = require('express')

const router = express.Router()

const adminController = require('../controllers/admin');

// if /add-products and /products both have a common path in front for eg.admin then you have to add
// app.use('/admin' , adminRoutes) in app.js file

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

// /admit/edit-product => GET
router.get('/edit-product/:productId', adminController.getEditProduct);

module.exports = router;
