const express = require("express")
const loginCtrl = require("../controllers/loginCtrl")

const router = express.Router()

router.post("/login", loginCtrl.login)

module.exports = router