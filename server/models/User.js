const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    accountType: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    accountIdentifier: {
        type: String
    },
    password: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    image: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", UserSchema);