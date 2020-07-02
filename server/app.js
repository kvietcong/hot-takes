// Dependancies
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

// Configuration
dotenv.config({ path: "./config/config.env" });
// require("./config/db")();
require("./config/passport")(passport)

const app = express();

// Request Body Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Session Middleware
app.use(session({
  secret: "test",
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));