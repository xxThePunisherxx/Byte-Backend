const {Router} = require('express')
const {createTraining, updateTraining, deleteTraining, getTraining, getAllTraining} = require('../controllers/training.js')


const router = Router()

router.post('/', createTraining)
router.put('/:id', updateTraining)
router.delete('/:id', deleteTraining)
router.get('/:id', getTraining)
router.get('/', getAllTraining)


module.exports = router






