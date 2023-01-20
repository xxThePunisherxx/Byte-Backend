const express = require('express');
const { createTraining, getAllTraining, getTrainingByid, updateTraining, deleteTraining } = require('../controllers/trainingcontoller.js');

// const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth.js');


const router = express.Router();


router.post('/add', createTraining)
router.get('/', getAllTraining)
router.get('/:id', getTrainingByid)
router.put('/update/:id', updateTraining)
router.delete('/delete/:id', deleteTraining)



module.exports = router





