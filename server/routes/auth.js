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
  req.logout();
  res.json({ status: "Successfully logged out" });
});

module.exports = router;