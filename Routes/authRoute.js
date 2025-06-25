const {registerUser} = require('../Controllers/authController')
const express = require('express')
const router = express.Router()

router.post('/regsiter', registerUser)

module.exports = router