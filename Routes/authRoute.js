const {registerUser, loginUser} = require('../Controllers/authController')
const express = require('express')
const router = express.Router()

router.post('/regsiter', registerUser);
router.post('/login', loginUser);

module.exports = router