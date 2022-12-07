const Login = require("../model/loginModel")

const loginCtrl = {

    login: async (req, res) => {

        try {

            const {id} = req.params

            const {email, password} = req.body

            const userlogin = await Login.findOne({email: email})

            if(userlogin) return res.status(200).json(userlogin)
            
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    }
}

module.exports = loginCtrl