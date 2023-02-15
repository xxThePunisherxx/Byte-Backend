const {Router} = require('express')
const { createCategory, getAllCategory, getCategoryByid, deleteCategory, updateCategory } = require('../controllers/categoryController')
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth.js')

// const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth.js');

const router = Router()

router.post('/add', isAuthenticatedUser, createCategory)
router.get('/',isAuthenticatedUser,  getAllCategory)
router.get('/:id', isAuthenticatedUser, getCategoryByid)
router.put('/update/:id',authorizeRoles("superAdmin", "admin"),  updateCategory)
router.delete('/delete/:id',authorizeRoles("superAdmin", "admin"), deleteCategory)




module.exports = router
