const express = require("express");
const { ensureAuth } = require("../custom-middleware/checkAuth");
const router = express.Router();
const Take = require("../models/Take");

const TAKES_PER_PAGE = 12;

// Retrieves all the takes
router.get("/", async (req, res) => {
    let { type, page } = req.query;
    if (!(type && page)) {
        return res.status(400).json({ status: "Missing query parameters" })
    }
    try {
        page = parseInt(page) - 1;
        const takes = Take
            .find()
            .skip(page * TAKES_PER_PAGE)
            .limit(TAKES_PER_PAGE)
            .populate("user");
        if (type == "hot") {
            takes.sort({ likes: -1 });
        } else {
            takes.sort({ createdAt: type === "all" ? 1 : -1 });
        }
        if (takes.length > 0 || page <= 0) {
            res.json({
                status: "Successfully retrieved Takes",
                takes: await takes
            });
        } else {
            res.status(400).json({ status: "Page number out of range" })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "Server could not process the request"});
    }
});

// Retrieves current user's takes
router.get("/me", ensureAuth, async (req, res) => {
    let { page } = req.query;
    if (!page) {
        return res.status(400).json({ status: "Missing query parameters" })
    }
    try {
        page = parseInt(page) - 1;
        const takes = await Take
            .find({ user: req.user.id })
            .sort({ createdAt: -1 })
            .skip(page * TAKES_PER_PAGE)
            .limit(TAKES_PER_PAGE)
            .populate("user");
        if (takes.length > 0 || page <= 0) {
            res.json({
                status: "Successfully retrieved Takes",
                takes: takes
            });
        } else {
            res.status(400).json({ status: "Page number out of range" })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "Server could not process the request"});
    }
});

// Retrieves current user's likes
router.get("/me/likes", ensureAuth, async (req, res) => {
    let { page } = req.query;
    if (!page) {
        return res.status(400).json({ status: "Missing query parameters" })
    }
    try {
        page = parseInt(page) - 1;
        const takes = await Take
            .find({ _id: { $in: req.user.likes }})
            .sort({ createdAt: -1 })
            .skip(page * TAKES_PER_PAGE)
            .limit(TAKES_PER_PAGE)
            .populate("user");
        if (takes.length > 0 || page <= 0) {
            res.json({
                status: "Successfully retrieved Takes",
                takes: takes
            });
        } else {
            res.status(400).json({ status: "Page number out of range" })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "Server could not process the request"});
    }
});

// Creates a new take
router.post("/", ensureAuth, async (req, res) => {
    try {
        if (req.user.id === req.body.user) {
            const newTake = await Take.create(req.body);
            res.json({
                status: "Successfully Added Take",
                take: newTake
            });
        } else {
            res.status(400).json({
                status: "You are not the user you say you are"
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "Server could not process the request"});
    }
});

// Returns the information about the take with the given ID
router.get("/:id", async (req, res) => {
    try {
        const take = await Take.findOne({ _id: req.params.id }).populate("user");
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
router.put("/:id", ensureAuth, async (req, res) => {
    try {
        if (req.user.id !== req.body.user) {
            return res.status(400).json({
                status: "You are not the user you say you are"
            });
        }
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
router.delete("/:id", ensureAuth, async (req, res) => {
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