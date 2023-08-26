const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true, "Name is Require"]
    }, 
    email:{
        type:String,
        require:[true, "Email is Require"]
    }, 
    password:{
        type:String,
        require:[true, "Password is Require"]
    }, 
})
const userModel = mongoose.model("Users", userSchema)

module.exports = userModel