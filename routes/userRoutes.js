const express = require("express")
const userCtrl = require("../controllers/userCtrl")

const router = express.Router()

router.post("/user", userCtrl.createNewUser)
router.get("/users", userCtrl.getAllUsers)
router.get("/user", userCtrl.getOneUser)
router.put("/user", userCtrl.updateOneUser)
router.delete("/user", userCtrl.deleteOneUser)

module.exports = router