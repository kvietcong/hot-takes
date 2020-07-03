const express = require("express");
const { ensureAuth } = require("../custom-middleware/checkAuth");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");

router.get("/me", ensureAuth, async(req, res) => {
    try {
        res.json(req.user);
    } catch (error) {
        console.error(error);
        res.status(500).send("error");
    }
});

module.exports = router;