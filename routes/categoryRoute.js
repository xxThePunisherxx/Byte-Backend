const {Router} = require('express')
const { createCategory, getAllCategory, getCategoryByid, deleteCategory, updateCategory } = require('../controllers/categoryController')
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth.js')

// const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth.js');

const router = Router()

router.post('/add', isAuthenticatedUser,authorizeRoles("superAdmin", "admin") ,createCategory)
router.get('/',authorizeRoles("superAdmin", "admin"),  getAllCategory)
router.get('/:id', authorizeRoles("superAdmin", "admin"), getCategoryByid)
router.put('/update/:id',authorizeRoles("superAdmin", "admin"),  updateCategory)
router.delete('/delete/:id',authorizeRoles("superAdmin", "admin"), deleteCategory)




module.exports = router
