const mongoose = require("mongoose")
const colors = require("colors")

const connectDb = async() =>{
try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log(`MongoDb Is connected on ${mongoose.connection.host}`.bgGreen.white)
} catch (error) {
    console.log(`MongoDb Server error is ${error} `.bgRed.white)
}
}

module.exports = connectDb;