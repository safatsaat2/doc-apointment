const userModel = require('../models/usersModels')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

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
        req.body.password = hashedPassowrd
        const newUser = new userModel(req.body)
        await newUser.save();
        res.status(201).send({message:`Registered Successfully`, success: true})

    } catch (error) {
        console.log(error)
        res.status(500).send({success: false, message: `Register Ctrl ${error}`})
    }
}
const logInControllers = async(req, res) => {
try {
    const user = await userModel.findOne({email: req.body.email})
    if(!user){
        res.status(200).send({message:"User Not Found", success: false})
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password)

    if(!isMatch){
        res.status(200).send({message:"Invalid Email or Password", success: false})
    }
    const token = jwt.sign({id:user._id},process.env.JWT_TOKEN, {expiresIn: "1d"})
    res.status(200).send({message:"Log IN Success", success: true, token})
} catch (error) {
    console.log(error);
    res.status(500).send({success: false, message: `Login Ctrl ${error.message}`})
}
}


module.exports = {logInControllers, registerControllers}