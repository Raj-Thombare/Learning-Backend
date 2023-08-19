const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");
const mongoDBStore = require("connect-mongodb-session")(session);

const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
// const mongoConnect = require('./util/database').mongoConnect;
const User = require("./models/user");

const MONGODB_URI =
  "mongodb+srv://Raj:SeOwCAcCYagkY0bD@cluster0.f7mohae.mongodb.net/shop";

const app = express();
const store = new mongoDBStore({
  uri: MONGODB_URI,
  collection: "sessions",
});

app.set("view engine", "ejs"); // set view engine to ejs
// app.set('view engine', 'pug') // set view engine to pug
app.set("views", "views"); // set view location

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const authRoutes = require("./routes/auth");
const { MongoDBStore } = require("connect-mongodb-session");

app.use(bodyParser.urlencoded({ extended: false }));
// it is used to extract the entire body portion of an incoming request stream and exposes it on the req.body property
// true - it will use the qs library for parsing
// false - it will use the traditional query string parsing method

app.use(express.static(path.join(__dirname, "public"))); //sets up a middleware in Express to serve static files
app.use(
  session({
    secret: "My Secret",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "Rakaa",
          email: "rakaa@test.com",
          cart: {
            items: [],
          },
        });
        user.save();
      }
    });
    console.log("DB Connected!");
    app.listen(3000);
  })
  .catch((err) => console.log(err));
