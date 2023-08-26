const express = require("express")
const { logInControllers, registerControllers } = require("../controllers/usersCtrl")

// Router Object
const router = express.Router()

// Routes
// LOGIN || POST 
router.post('/login', logInControllers)

// Register || POST
router.post('/register', registerControllers)
module.exports = router