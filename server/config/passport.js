const twitterStrategy = require("passport-twitter").Strategy;
const mongoose = require("mongoose");
const User = require("../models/User");

// Configures a given passport to use the Twitter and Local Strategies
module.exports = passport => {
//   passport.use();

  passport.serializeUser((user, done) => done(null, user.id));

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
  });
};