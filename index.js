const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./db")
const routes = require("./routes")

dotenv.config()

const app = express()

app.use(express.json())

connectDB()

app.use("/api", routes)

const PORT = process.env.PORT || 8000

app.get("/", (req, res) => {
    return res.status(200).json({msg: "Welcome to my Backend"})
})

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})
