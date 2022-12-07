const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: [true, "Please fill out this field"]
    },

    email: {
        type: String,
        required: [true, "Please fill out this field"],
        unique: true
    },

    Password: {
        type: Number,
        required: [true, "Please fill out this field"]
    },

}, {
    timestamps: true
})

const Users = mongoose.model("Users", userSchema)
module.exports = Users 