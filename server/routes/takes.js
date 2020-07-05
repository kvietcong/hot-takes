const express = require("express");
const { ensureAuth } = require("../custom-middleware/checkAuth");
const router = express.Router();
const Take = require("../models/Take");

// Creates a new take
router.post("/", async (req, res) => {
    try {
        const newTake = await Take.create(req.body);
        res.json({
            status: "Successfully Added Take",
            take: newTake
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "Server could not process the request"});
    }
});

// Returns the information about the take with the given ID
router.get("/:id", async (req, res) => {
    try {
        const take = await Take.findOne({ _id: req.params.id });
        if (take) {
            res.json({
                status: "Successfully Found Take",
                take: take
            });
        } else {
            res.status(400).json({ status: "Take with given ID was not found"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "Server could not process the request"});
    }
});

// Edits the information about the take with the given ID
router.put("/:id", async (req, res) => {
    try {
        const take = await Take.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true
        });
        if (take) {
            res.json({
                status: "Successfully Updated Take",
                take: take
            });
        } else {
            res.status(400).json({ status: "Take with given ID was not found"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "Server could not process the request"});
    }
});

// Deletes the take with the given ID
router.delete("/:id", async (req, res) => {
    try {
        const take = await Take.deleteOne({ _id: req.params.id });
        if (take) {
            res.json({
                status: "Successfully Deleted Take"
            });
        } else {
            res.status(400).json({ status: "Take with given ID was not found"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "Server could not process the request"});
    }
});

module.exports = router;