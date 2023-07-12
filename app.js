const express = require('express');
const path = require('path')

const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs') // set view engine to ejs
// app.set('view engine', 'pug') // set view engine to pug
app.set('views', 'views') // set view location

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.router);
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: "Page not found" })
})

app.listen(3000)