const express = require("express");
const { ensureAuth } = require("../custom-middleware/checkAuth");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");

// Returns the currently logged on user
router.get("/me", ensureAuth, async (req, res) => {
    try {
        res.json(req.user);
    } catch (error) {
        console.error(error);
        res.status(500).send("error");
    }
});

// Updates the current user's information with the given information
router.put("/me", ensureAuth, async (req, res) => {

});

// Returns the information about the user with the given ID
router.get("/:id", async (req, res) => {

});

module.exports = router;