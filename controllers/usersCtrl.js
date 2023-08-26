const userModel = require('../models/usersModels')
const bcrypt = require("bcryptjs")

// Register Controller
const registerControllers = async(req, res) => {
    try {
        const existingUser = await userModel.findOne({email: req.body.email})
        if(existingUser){
            return res.status(200).send({message: "User Already Exist", success: false})
        }
        const password = req.body.password
        const salt = await bcrypt.genSalt(10)
        const hashedPassowrd = await bcrypt.hash(password,salt)
        req,body.password = hashedPassowrd
        const newUser = new userModel(req.body)
        await newUser.save();
        res.status(201).send({message:`Registered Successfully`, success: true})

    } catch (error) {
        console.log(error)
        res.status(500).send({success: false, message: `Register Ctrl ${error}`})
    }
}
const logInControllers = () => {}


module.exports = {logInControllers, registerControllers}