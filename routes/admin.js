const express = require('express')
const path = require('path')
const rootDir = require('../util/path')

const router = express.Router()

// if /add-products and /products both have a common path in front for eg.admin then you have to add
// app.use('/admin' , adminRoutes) in app.js file

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'view', 'add-product.html'))
})

router.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router;