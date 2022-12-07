const express = require("express")
const articleCtrl = require("../controllers/articleCtrl")

const router = express.Router()

router.get("/articles", articleCtrl.getAllArticles)

router.get("/article", articleCtrl.getAnArticle)

router.post("/article", articleCtrl.addNewArticle)

router.put("/article", articleCtrl.updateAnArticle)

router.delete("/article", articleCtrl.deleteAnArticle)

module.exports = router