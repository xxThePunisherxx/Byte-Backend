const { Router } = require('express');
const {returnSignupPage, returnLoginPage, createUser, loginUser, logoutUser} = require('../controllers/authController')
const router = Router();



router.post('/login', loginUser)
router.get('/logout', logoutUser)

module.exports = router