const Training = require('../models/Training.js');
const ErrorHandler = require('../utils/errorHandler.js');
const catchAsyncErrors = require('../middleware/catchAsyncErrors.js');
const Category = require('../models/Category.js');
// const ApiFeatures = require('../utils/apiFeatures.js')

// create training -- admin
const createTraining = catchAsyncErrors(

    async(req, res, next)=>{
        // req.body.user = req.user.id;
        const category = await Category.findById(req.body.category);
        if(!category)
        return res.status(400).json({success:false, category})

        const training = await Training.create(req.body);
        res.status(201).json({training})
    }
)



// get all training
const getAllTraining = catchAsyncErrors(

 async(req, res)=>{

    // for query features;
    // const apiFeatures = new ApiFeatures(Product.find(), req.query).search().filter()

    const training = await Training.find().populate({ path: 'category' })

    res.status(201).json({training})
  }
)

// get training by id
const getTrainingByid = catchAsyncErrors(

    async(req,res, next)=>{
        const trainings = await Training.findById(req.params.id).populate({path:'category'});

        if(!trainings)
    
        return next(new ErrorHandler("training not found", 404 ))
    
        res.status(201).json({trainings})
    
    }
)



// update training -- admin
const updateTraining = catchAsyncErrors(

    async(req, res, next)=>{
        let training = Training.findById(req.params.id);
    
        if(!training){
            return next(new ErrorHandler("training cannot be updated", 404 ))
        }
        training = await Training.findByIdAndUpdate(req.params.id, req.body, {new:true, useFindAndModify:false})
        
        res.status(201).json({training})
    }
    
)


// delete training - admin

const deleteTraining = catchAsyncErrors(

    async(req, res, next)=>{
        let training = Training.findById(req.params.id);
    
        if(!training){
            return next(new ErrorHandler("training not found", 404 ))
        }
        training = await Training.findByIdAndRemove(req.params.id, req.body)
        
        res.status(201).json({message:"training deleted successfully"})
    }
    
)


//create New review or update the review
// const createProductReview = catchAsyncErrors(async(req,res, next)=>{
//     const {rating, comment, productID} = req.body;

//     const review ={
//         user:req.user._id,
//         name:req.user.name,
//         rating: Number(rating), comment,
//     };

//     const product = await Product.findById(productID);
    
//     if(isReviewed){
//         const isReviewed = product.reviews.find(rev=>rev.user)
//     }else{
//         product.reviews.push(review)
//     }
// }) 



module.exports ={
    createTraining,
    getAllTraining,
    updateTraining,
    deleteTraining,
    getTrainingByid
}