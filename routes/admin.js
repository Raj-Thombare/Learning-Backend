const express = require('express')
const path = require('path')
const rootDir = require('../util/path')

const router = express.Router()

// if /add-products and /products both have a common path in front for eg.admin then you have to add
// app.use('/admin' , adminRoutes) in app.js file

const products = [];

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'view', 'add-product.html'))
})

router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title })
    res.redirect('/')
})

exports.router = router;
exports.products = products;