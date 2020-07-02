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
        type: String
    },
    lastName: {
        type: String
    },
    profileImage: {
        type: String
    },
    biography: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", UserSchema);