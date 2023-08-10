const express = require('express');
const path = require('path')

const bodyParser = require('body-parser');

const errorController = require('./controllers/error')
const mongoConnect = require('./util/database').mongoConnect;
const User = require('./models/user')

const app = express();

app.set('view engine', 'ejs') // set view engine to ejs
// app.set('view engine', 'pug') // set view engine to pug
app.set('views', 'views') // set view location

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }))
// it is used to extract the entire body portion of an incoming request stream and exposes it on the req.body property
// true - it will use the qs library for parsing
// false - it will use the traditional query string parsing method

app.use(express.static(path.join(__dirname, 'public'))); //sets up a middleware in Express to serve static files

app.use((req, res, next) => {
    User.findById('64d129425582b818b144b32f').then((user) => {
        req.user = new User(user.name, user.email, user.cart, user._id);
        next();
    }).catch(err => console.log(err))
})

app.use('/admin', adminRoutes);
app.use(shopRoutes)

app.use(errorController.get404)

mongoConnect(() => {
    app.listen(3000)
})

// app.listen(3000);


