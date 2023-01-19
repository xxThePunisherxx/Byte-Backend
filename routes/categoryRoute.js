const {Router} = require('express')
const { createCategory, getAllCategory, getCategoryByid, deleteCategory, updateCategory } = require('../controllers/categoryController')

const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth.js');

const router = Router()

router.post('/add', isAuthenticatedUser, createCategory)
router.get('/categorys', getAllCategory)
router.get('/categorys/:id', getCategoryByid)
router.put('/update/:id', isAuthenticatedUser, updateCategory)
router.delete('/delete/:id',isAuthenticatedUser, deleteCategory)




module.exports = router
