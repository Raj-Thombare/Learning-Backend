exports.getLogin = (req, res, next) => {
  console.log(req.get("Cookie"));
  res.render("auth/login", {
    pageTitle: "Login",
    path: "/login",
    isAuthenticated: req.isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  res.cookie("LoggedIn", "true", { maxAge: 3600000, httpOnly: true });
  res.redirect("/");
};
