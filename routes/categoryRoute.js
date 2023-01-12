const {Router} = require('express')
const category = require('../controllers/category.js')


const router = Router()

router.post('/', category.createCategory)
router.get('/', category.getCategory)
router.post('/poulate', category.getAllCategory)


module.exports = router
