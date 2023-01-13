
const Category = require('../models/Category.js')
const Training = require('../models/Training.js')



// get training list
const getAllTraining = async(req,res)=>{
    const trainingList = await Training.find()
    .populate({path:'category'})
   

    if(!trainingList){
        res.status(500).json({success:false})
    }
    res.send(trainingList)
}


// get training list by id
const getTraining = async(req,res)=>{
   
    const training = await Training.findById(req.params.id)
    .populate({path:'category'})
    

    if(!training){
        res.status(500).json({success:false})
    }
    res.status(201).send(training)  
    
}


// get training by specify
// const getTrainingBySpecify = async(req,res)=>{
//     const trainingList = await Training.find().select('title image -_id');

//     if(!trainingList){
//         res.status(500).json({success:false})
//     }
//     res.send(trainingList)
// }







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
       career:req.body.career,
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



// update training
const updateTraining = async(req,res)=>{
    
    const training = await Training.findByIdAndUpdate(req.params.id, req.body, {new:true}
    )
    if(!training)
    return res.status(400).send("Training cannot be updated")
   
    res.send(training)
   }


//  const deleteTraining = async(req,res,next)=>{
//     try{
//         await Training.findByIdAndDelete(req.params.id)
//         res.status(200).json("Training course deleted successfully")
//         }catch(err){
//            next(err)
//         }
// }


//delete training
const deleteTraining = async(req,res)=>{
    Training.findByIdAndRemove(req.params.id)
    .then(training=>{
        if(training){
            return res.status(201).json({success:true, message:"the training successfully deleted"})
        }else{
            return res.status(404).json({success:false, message:"training could not found"})
        }
    }).catch(err=>{
        return res.status(404).json({success:false, error:err})
    })
}




module.exports = {
    addTraining,
    getTraining,
    getAllTraining,
    // getTrainingBySpecify,
    updateTraining,
    deleteTraining,
    

}