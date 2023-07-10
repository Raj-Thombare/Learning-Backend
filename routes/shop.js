const express = require('express')

const path = require('path')

const rootDir = require('../util/path')
const adminData = require('./admin')

const router = express.Router()

router.get('/', (req, res, next) => {
    console.log('shop.js', adminData.products)
    // res.sendFile(path.join(rootDir, 'view', 'shop.html'))
    res.render('shop')
})

module.exports = router;