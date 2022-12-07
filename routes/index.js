const authRoutes = require("./authRoutes")
const articleRoutes = require("./articleRoutes")
const loginRoutes = require("./loginRoutes")
const userRoutes = require("./userRoutes")

const routes = [

    authRoutes,
    articleRoutes,
    loginRoutes,
    userRoutes

]

module.exports = routes