// Dependencies
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const { ensureAuth } = require("./custom-middleware/checkAuth");

const PORT = process.env.PORT || 8000;

// Configuration
dotenv.config({ path: "./config/config.env" });
require("./config/db")();
require("./config/passport")(passport)

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

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

app.use(express.static("../client/build"));

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/takes", require("./routes/takes"));
app.use("/api/users", require("./routes/users"));
app.use("/api/share", require("./routes/share"));
// Redirects all other requests to main page
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, console.log(`Server running on port ${PORT}`));