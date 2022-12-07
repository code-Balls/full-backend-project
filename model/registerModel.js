const mongoose = require("mongoose")

const regSchema = new mongoose.Schema({

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

    firstname: {
        type: String,
        required: [true, "please fill out this field"]
    },

    lastname: {
        type: String,
        required: [true, "please fill out this field"]
    },

    address: {
        type: String,
        required: [true, "please fill out this field"]
    }

})

const Register = mongoose.model("Register", regSchema)
module.exports = Register