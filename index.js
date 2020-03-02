const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const router = require("./routes");
LocalStrategy = require("passport-local").Strategy;
const app = express();
const { admins } = require("./models");
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/home", function(req, res) {
  res.send("Hello home");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());
passport.use(
  new LocalStrategy(async function(username, password, done) {
    console.log("Hello try");
    admins
      .findOne({
        name: username,
        password: password
      })
      .then(function(admin) {
        if (admin) {
          console.log("Successfull login");
          console.log("123", admin, "123");
          return done(null, admin);
        } else {
          console.log("User is not valid");
          return done(null, false);
        }
      });
  })
);
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

app.use(router);
app.listen(5000, () => console.log("server is listening on 5000"));
