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
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

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
app.get("/test", (req, res) => {console.log("test"); res.redirect(`${process.env.CLIENT_URL}/test`)});
app.use("/api/auth", require("./routes/auth"));
app.use("/api/takes", require("./routes/takes"));
app.use("/api/users", require("./routes/users"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));