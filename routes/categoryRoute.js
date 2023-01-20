const {Router} = require('express')
const { createCategory, getAllCategory, getCategoryByid, deleteCategory, updateCategory } = require('../controllers/categoryController')

// const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth.js');

const router = Router()

router.post('/add',  createCategory)
router.get('/categorys', getAllCategory)
router.get('/categorys/:id', getCategoryByid)
router.put('/update/:id',  updateCategory)
router.delete('/delete/:id', deleteCategory)




module.exports = router
