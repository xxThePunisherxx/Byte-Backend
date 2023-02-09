const express = require('express');
const { registerUser, loginUser, logoutUser, 
  getUserDetails, 
  updatePassword, 
  getAllUser, 
  getSingleUser,
  updateUserRole,
  deleteUser,
  forgotPassword,
  resetPassword
  // forgotPassword, resetPassword, updateProfile 
} 
  = require('../controllers/userController.js');
const {isAuthenticatedUser, authorizeRoles} = require('../middleware/auth.js')

const router = express.Router();







router.post('/register', registerUser)

router.post('/login', loginUser)

// router.post("/password/forgot", forgotPassword);

// router.put("/password/reset/:token", resetPassword);

router.get("/logout", logoutUser);

router.get("/me",isAuthenticatedUser, getUserDetails);

router.put('/password/update/:id', isAuthenticatedUser, updatePassword)

router.post('/password/forgot', forgotPassword)
router.put('/password/reset/:token', resetPassword)

// router.put("/me/update", isAuthenticatedUser, updateProfile);

router.get("/superadmin/users", isAuthenticatedUser, authorizeRoles("admin"), getAllUser);

router.get("/superadmin/user/:id", isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)

router.put('/role/:id', isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)

router.delete('/delete/:id', isAuthenticatedUser, authorizeRoles("admin"), deleteUser);



module.exports = router