const mongoose = require("mongoose")

const loginSchema = new mongoose.Schema({

    email: {
        type: String,
        required: [true, "Please fill out this field"],
        unique: true
    },

    password: {
        type: String,
        required: [true, "Please fill out this field"]
    }
})

const Login = mongoose.model("Login", loginSchema)
module.exports = Login