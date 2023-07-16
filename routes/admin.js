const express = require('express')

const router = express.Router()

const productsController = require('../controllers/products')

// if /add-products and /products both have a common path in front for eg.admin then you have to add
// app.use('/admin' , adminRoutes) in app.js file

router.get('/add-product', productsController.getAddProduct)

router.post('/add-product', productsController.postAddProduct)

exports.router = router;
