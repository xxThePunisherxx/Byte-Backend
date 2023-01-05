
const Training = require('../models/Training.js')


 const createTraining = async(req,res,next)=>{
    const newTraining = new Training(req.body)
    try{
     const savedTraining = await newTraining.save()
    
     res.status(200).json(savedTraining)
    }catch(err){
       next(err)
    }
}


 const updateTraining = async(req,res,next)=>{
    try{
        const updatedTraining = await Training.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true})
            res.status(200).json(updatedTraining)
      }catch(err){
           next(err)
        }
}


 const deleteTraining = async(req,res,next)=>{
    try{
        await Training.findByIdAndDelete(req.params.id)
        res.status(200).json("Training course deleted successfully")
        }catch(err){
           next(err)
        }
}

 const getTraining = async(req,res,next)=>{
    try{
        const training = await Training.findById(req.params.id);
         res.status(200).json(training)
     }catch(err){
         next(err)
     }
}

 const getAllTraining = async(req,res,next)=>{
    try{
        const training = await Training.find() 
        res.status(200).json(training)
        }catch(err){
            next(err)
        }
}

module.exports = {
    createTraining,
    updateTraining,
    deleteTraining,
    getTraining,
    getAllTraining

}