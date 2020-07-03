const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get("/twitter", passport.authenticate("twitter"));

router.get("/twitter/callback",
    passport.authenticate("twitter", {
        successRedirect: `${process.env.CLIENT_URL}/profile`,
        failureRedirect: `${process.env.CLIENT_URL}/error`
    })
);

router.get("/logout", (req, res) => {
  req.logout();
  res.json({ status: "Successfully logged out" });
});

module.exports = router;