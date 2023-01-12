const {Router} = require('express')
const {addTraining, updateTraining, deleteTraining, getTraining, getAllTraining} = require('../controllers/training.js')


const router = Router()

router.get('/:id', getTraining)
router.get('/', getAllTraining)

//   //TODO:
     

router.post('/', addTraining)
router.put('/update/:id', updateTraining)
router.delete('/delete/:id', deleteTraining)


module.exports = router






