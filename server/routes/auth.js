const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get("/twitter", passport.authenticate("twitter"));

router.get("/twitter/callback",
    passport.authenticate("twitter", {
        successRedirect: `${process.env.CLIENT_URL}/`,
        failureRedirect: `${process.env.CLIENT_URL}/error`
    })
);

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(`${process.env.CLIENT_URL}/`);
});

module.exports = router;