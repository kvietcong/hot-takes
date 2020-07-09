const express = require("express");
const { ensureAuth } = require("../custom-middleware/checkAuth");
const router = express.Router();
const User = require("../models/User");

// Returns the currently logged on user
router.get("/me", ensureAuth, async (req, res) => {
    try {
        res.json(req.user);
    } catch (error) {
        console.error(error);
        res.status(500).json("Server cannot retrieve user");
    }
});

// Updates the current user's information with the given information
router.put("/me", ensureAuth, async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.user.id }, req.body, {
            new: true,
            runValidators: true
        });
        if (user) {
            res.json({
                status: "Successfully Updated User",
                user: user
            });
        } else {
            res.status(400).json({ status: "User with given ID was not found"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "Server could not process the request"});
    }
});

// Returns the information about the user with the given ID
router.get("/:id", async (req, res) => {

});

module.exports = router;