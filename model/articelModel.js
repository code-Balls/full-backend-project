const mongoose = require("mongoose")

const articleSchema = new mongoose.Schema({

    author: {
        type: String,
        required: [true, "Please fill out this field"]
    },

    date: {
        type: String,
        required: [true, "Please fill out this field"]
    },

    title: {
        type: String,
        required: [true, "Please fill out this field"]
    },

    paragraph: {
        type: String,
        required: [true, "Please fill out this field"]
    }
})

const Article = mongoose.model("Article", articleSchema)
module.exports = Article