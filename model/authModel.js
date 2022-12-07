const mongoose = require("mongoose")

const userSchema = new mongoose.Schema ({

    email: {
        type: String,
        required: [true, "Please input your email :)"],
        trim: true,
        unique: true
    },

    password: {
        type: Number,
        required: [true, "Please input your password :)"],
        trim: true
    },

    cf_password: {
        type: Number,
        required: [true, "Please confirm your password :)"],
        trim: true
    },
}, {
    timestamps: true
})

const Users = mongoose.model("Users", userSchema)
module.exports = Users

