const Category = require('../models/Category.js')

// getAll category
const getAllCategory = async(req,res)=>{
  
 const categoryList = await Category.find();

 if(!categoryList){
    res.status(500).send({success:false})
 }
res.status(200).send(categoryList)

}


// get by id category
const getCategory = async(req,res)=>{
  const category = await Category.findById(req.params.id);
  if(!category){
    res.status(500).send({message:"The category with given id was not found"})
 }
res.status(200).send(category)
   
   }

// create category
const createCategory = async(req,res)=>{
  let category = new Category({
    course_type: req.body.course_type
  })

  category = await category.save();
  if(!category)
  return res.status(404).send('the category cannot be created')

  res.send(category)
   }


//delete category
const deleteCategory = async(req,res)=>{
    Category.findByIdAndRemove(req.params.id)
    .then(category=>{
        if(category){
            return res.status(201).json({success:true, message:"the category successfully deleted"})
        }else{
            return res.status(404).json({success:false, message:"category could not found"})
        }
    }).catch(err=>{
        return res.status(404).json({success:false, error:err})
    })
}


// update the category
const updateCategory = async(req,res)=>{
    
 const category = await Category.findByIdAndUpdate(req.params.id,
   req.body, {new:true}
 )
 if(!category)
 return res.status(400).send("Category cannot be updated")

 res.send(category)
}

module.exports = {
    getAllCategory,
    getCategory,
    createCategory,
    deleteCategory,
    updateCategory
    
}