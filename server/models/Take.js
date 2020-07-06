const mongoose = require("mongoose");

const TakeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minLength: [1, "Please have a title"],
        maxlength: [100, "Whoa there, that's too long of a title"]
    },
    body: {
        type: String,
        required: true,
        minLength: [1, "Please have a take"]
    },
    categories: {
        type: [String],
        default: []
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Take", TakeSchema);