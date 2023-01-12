const Category = require('../models/Category.js')


const createCategory = async(req,res,next)=>{
    const newCategory = new Category(req.body)
    try{
        const savedCategory = await newCategory.save()
        res.status(200).json(savedCategory)
    }catch(err){
        next(err)
    }
}

const getCategory = async(req,res,next)=>{
    try{
        const category = await Category.findById(req.params.id)
        res.status(200).json(category)
    }catch(err){
        next(err)
    }
}

const getAllCategory = async(req,res,next)=>{
    try{
        const category = await Category.find({_id:req.body.course_type_id}).populate('category_id')
        res.status(200).json(category)
    }catch(err){
        next(err)
    }
}

module.exports = {
    createCategory,
    getCategory,
    getAllCategory
}