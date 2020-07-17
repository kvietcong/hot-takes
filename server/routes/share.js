const express = require("express");
const { ensureAuth } = require("../custom-middleware/checkAuth");
const router = express.Router();
const Twitter = require("twitter");
const Take = require("../models/Take");
const User = require("../models/User");

// Shares a hot take post
router.post("/:id", ensureAuth, async (req, res) => {
    const takeID = req.params.id;
    if (!takeID) {
        return res.status(400).status({ status: "Bad Request: Missing take ID" });
    }
    try {
        let user = await User.findOne({ _id: req.user.id });
        let take = await Take.findOne({ _id: takeID });
        if (!(user && take)) {
            return res.status(400).json({ status: "Bad request: User or Take does not exist" });
        }
        new Twitter({
            consumer_key: process.env.TWITTER_CONSUMER_KEY,
            consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
            access_token_key: user.token,
            access_token_secret: user.tokenSecret
        }).post("statuses/update", {
            status: "See this take on HotTakes! Link: " +
            `https://le-hot-takes.herokuapp.com/takes/view/${takeID}`
        },  async (error, tweet, response) => {
            if (error) throw error;
        });
        res.json({ status: "Take shared on Twitter" });
    } catch (error) {
        res.status(500).json({ status: "Server error has occurred" });
    }
});

module.exports = router;