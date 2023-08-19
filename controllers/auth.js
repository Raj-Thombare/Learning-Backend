exports.getLogin = (req, res, next) => {
  console.log(req.session.isLoggedIn);
  res.render("auth/login", {
    pageTitle: "Login",
    path: "/login",
    isAuthenticated: req.isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  // res.cookie("LoggedIn", "true", { maxAge: 3600000, httpOnly: true });
  req.session.isLoggedIn = true;
  res.redirect("/");
};
