const Article = require("../model/articelModel")

const articleCtrl = {

    getAnArticle: async (req, res) => {

        try {
            
            const {id} = req.params

            const article = await Article.findById(id)

            if(!article) return res.status(400).json({msg: "Article does'nt exist on database"})

            return res.status(200).json(article)

        } catch (error) {
           return res.status(500).json({msg: error.message}) 
        }
    },

    getAllArticles: async (req, res) => {

        try {

            const allArticles = await Article.find()

            if(!allArticles) return res.status(400).json({msg: "No article in database"})

            return res.status(200).json(allArticles)
            
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },

    updateAnArticle: async (req, res) => {

        try {

            const {id} = req.params

            const {author, date, title, paragraph} = req.body

            const article = await Article.findByIdAndUpdate(id, {author, date, title, paragraph})

            return res.status(200).json({msg: "Article updated successfully"})
            
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },

    addNewArticle: async (req, res) => {

        try {

            const {author, date, title, paragraph} = req.body 

            const article = await Article.findOne()

            if(article) return res.status(404).json({msg: "Article with provided details already exists in database"})

            const newArticle = new Article ({author, date, title, paragraph})

            await newArticle.save()

            return res.status(200).json("Article added successfully")
            
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },

    deleteAnArticle: async (req, res) => {

        try {

            const {id} = req.params

            const artToDelete = await Article.findById(id)

            if(!artToDelete) return res.status(404).json("Could'nt find article")

            const deletedArticle = await Article.findByIdAndDelete(id)

            return res.status(200).json({msg: "Article deleted successfully"})
            
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },

}

module.exports = articleCtrl