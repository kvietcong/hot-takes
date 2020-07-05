const express = require("express");
const passport = require("passport");
const router = express.Router();

// Authenticates through twitter
router.get("/twitter", passport.authenticate("twitter"));

// Redirects user depending on success of the authentication
router.get("/twitter/callback",
    passport.authenticate("twitter", {
        successRedirect: `${process.env.CLIENT_URL}/profile`,
        failureRedirect: `${process.env.CLIENT_URL}/error`
    })
);

// Logs the current user out
router.get("/logout", (req, res) => {
    try {
        req.logout();
        req.session.destroy();
        res.json({ status: "Successfully logged out" });
    } catch (error) {
        res.status(500).json({ status: "Server error in logging out" });
    }
});

module.exports = router;