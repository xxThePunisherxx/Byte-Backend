const {Router} = require('express')
const category = require('../controllers/category.js')


const router = Router()

router.get('/', category.getAllCategory)
router.get('/:id', category.getCategory)
router.post('/', category.createCategory)
router.delete('/:id', category.deleteCategory)
router.put('/:id', category.updateCategory)


module.exports = router
