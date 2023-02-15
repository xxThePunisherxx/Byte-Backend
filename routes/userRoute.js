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







router.post('/register', isAuthenticatedUser, authorizeRoles("superAdmin") , registerUser)

router.post('/login', loginUser)

// router.post("/password/forgot", forgotPassword);

// router.put("/password/reset/:token", resetPassword);

router.get("/logout", logoutUser);

router.get("/me",isAuthenticatedUser, getUserDetails);

router.put('/password/update/:id', isAuthenticatedUser, updatePassword)

router.post('/password/forgot', forgotPassword)
router.put('/password/reset/:token', resetPassword)

// router.put("/me/update", isAuthenticatedUser, updateProfile);

router.get("/admin/users", isAuthenticatedUser, getAllUser);

router.get("/admin/user/:id", isAuthenticatedUser, getSingleUser)

router.put('/role/:id', isAuthenticatedUser, updateUserRole)

router.delete('/delete/:id', isAuthenticatedUser, deleteUser);



module.exports = router