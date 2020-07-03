const express = require("express");
const { ensureAuth } = require("../custom-middleware/checkAuth");
const router = express.Router();

// Creates a new take
router.post("/", async (req, res) => {

});

// Returns the information about the take with the given ID
router.get("/:id", async (req, res) => {

});

// Edits the information about the take with the given ID
router.put("/:id", async (req, res) => {

});

module.exports = router;