const Users = require("../model/userModel")

const userCtrl = {

    createNewUser: async (req, res) => {

        try {
            
            const {username, email, password} = req.body

            const user = await Users.findOne({email: email})

            if(user) return res.status(404).json({msg: "User already exists"})

            const newUser = new Users({username, email, password})

            await newUser.save()

            return res.status(200).json("New user added successfully")



        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },

    getAllUsers: async (req, res) => {

        try {
           
            const allUsers = await Users.find()

            if(!allUsers) return res.status(400).json({msg: "Could'nt find any user in database"})

            return res.status(200).json(allUsers)

        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },

    getOneUser: async (req, res) => {

        try {
            
            const {id} = req.params

            const user = await Users.findById(id)

            if(!user) return res.status(404).json({msg: "User already exist"})

            return res.status(200).json(user)

        } catch (error) {
           return res.status(500).json({msg: error.message}) 
        }
    },

    updateOneUser: async (req, res) => {

        try {
            
            const {id} = req.params

            const {username, email, password} = req.body 

            const user = await Users.findByIdAndUpdate(id, {username, email, password})

            return res.status(200).json("User updated succesfully")

        } catch (error) {
            return res.status(500).json({msg: error.message}) 
        }
    },

    deleteOneUser: async (req, res) => {

        try {

            const {id} = req.params

            const userToDelete = await Users.findById(id)

            if(!userToDelete) return res.status(404).json({msg: "Could'nt find user to delete"})

            const deletedUser = await Users.findByIdAndDelete(id)

            return res.status(200).json("User deleted successfully")
            
        } catch (error) {
            return res.status(500).json({msg: error.message}) 
        }
    }

}

module.exports = userCtrl