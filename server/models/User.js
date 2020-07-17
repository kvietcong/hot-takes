const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    twitterID: {
        type: String,
        required: true
    },
    twitterHandle: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        default: ""
    },
    lastName: {
        type: String,
        default: ""
    },
    profileImage: {
        type: String,
        default: ""
    },
    biography: {
        type: String,
        default: ""
    },
    likes: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Take"
        }],
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    token: {
        type: String,
        required: true
    },
    tokenSecret: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("User", UserSchema);