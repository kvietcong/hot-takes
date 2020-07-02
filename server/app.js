// Dependencies
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const { ensureAuth, ensureGuest } = require("./custom-middleware/checkAuth");

// Configuration
dotenv.config({ path: "./config/config.env" });
require("./config/db")();
require("./config/passport")(passport)

const app = express();
app.use(cors());

// Request Body Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Session Middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get("/test", ensureAuth, (req, res) => {console.log(req.user, req.user.id); res.redirect("/secret.html");})
app.get("/api/auth/twitter", passport.authenticate("twitter"));

app.get("/api/auth/twitter/callback",
    passport.authenticate("twitter", { successRedirect: "/", failureRedirect: "/fail.html" })
);

const PORT = process.env.PORT || 8000;

app.use(express.static("./test"));

app.listen(PORT, console.log(`Server running on port ${PORT}`));