const express = require("express");
const { ensureAuth, ensureGuest } = require("../custom-middleware/checkAuth");
const router = express.Router();

module.exports = router;