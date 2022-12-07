const Users = require("../model/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const generateAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN, {expiresIn: "5m"})
}
const generateRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN, {expiresIn: "5d"})
}

const auth = {

    register: async (req, res) => {

        try {

            const {email, password, cf_password} = req.body

            if(!email || !password || !cf_password)
            return res.status(400).json({msg: "Please enter all fields"})

            const alreadyExist = await Users.findOne({email: email })
            if(alreadyExist) return res.status(404).json({msg: "This user already exist"})

            if(cf_password !== password)
            return res.status(400).json({msg: "Confirm password does'nt match"})

            // else {
            //     return res.status(201).json({msg: "Account created"})
            // }

            const hashedPassword = await bcrypt.hash(password, 13)

            const newUser = new Users({username, email, password: hashedPassword})

            const accessToken = generateAccessToken ({newUser})
            const refreshToken = generateRefreshToken ({newUser})

            await newUser.save()

            console.log(accessToken)

            return res.status(200).json({
                msg: "Registration Successful",
                newUser,
                accessToken,
                refreshToken
            })
            
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    }

}

module.exports =auth