const express = require('express')
const colors = require("colors")
const morgan = require("morgan")
const dotenv = require("dotenv")
const connectDb = require('./config/db')

dotenv.config()
// MongoDb Connection 
connectDb();

// Rest Object

const app = express()

// middlewares
app.use(express.json())
app.use(morgan('dev'))


// routes
app.use("/api/v1/user", require("./routes/usersRoutes"))




app.get('/', (req, res)=>{
    res.status(200).send({
        message: "Server is running",
    })
})

const port = process.env.PORT || 8080

// Listen
app.listen(port, ()=>{
    console.log(`Server  is running in ${process.env.DEV_MODE} Mode on port ${process.env.PORT}`.bgBlue.white)
})