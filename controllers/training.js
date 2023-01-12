
const Category = require('../models/Category.js')
const Training = require('../models/Training.js')



// get training list
const getAllTraining = async(req,res)=>{
    const trainingList = await Training.find()
   

    if(!trainingList){
        res.status(500).json({success:false})
    }
    res.send(trainingList)
}


// get training by specify
const getTrainingBySpecify = async(req,res)=>{
    const trainingList = await Training.find().select('title image -_id');

    if(!trainingList){
        res.status(500).json({success:false})
    }
    res.send(trainingList)
}



// get training list by id
const getTraining = async(req,res)=>{
   
    const training = await Training.findById(req.params.id);

    if(!training){
        res.status(500).json({success:false})
    }
    res.send(training)  
    
}



// add traning course
 const addTraining = async(req,res)=>{
  
    // validate the category id
    const category = await Category.findById(req.body.category)
    if(!category) 

    return res.status(400).send('Invalid Category')


    const training = new Training({
       title: req.body.title,
       description: req.body.description,
       duration: req.body.duration,
       priority: req.body.priority,
       image: req.body.image,
       rating: req.body.rating,
       category:req.body.category
    })
    await training.save()
if(!training)
return res.status(500).send('The training cannot be created')

return res.status(201).send(training)
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




module.exports = {
    addTraining,
    getTraining,
    getAllTraining,
    getTrainingBySpecify,
    updateTraining,
    deleteTraining,
    

}