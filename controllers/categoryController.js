const Category = require("../models/Category.js");
const ErrorHandler = require("../utils/errorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors.js");

// create category
const createCategory = catchAsyncErrors(async (req, res, next) => {
  // req.body.user = req.user.id;
  // let category = new Category({
  //     product_type: req.body.product_type
  //   })

  const category = await Category.create(req.body);
  res.status(201).json({ success: true, category });
});

// // get all category
const getAllCategory = catchAsyncErrors(async (req, res) => {
  const categorys = await Category.find();
  res.status(201).json({ success: true, categorys });
});

// get category by id
const getCategoryByid = catchAsyncErrors(async (req, res, next) => {
  const categorys = await Category.findById(req.params.id);
  if (!categorys) {
    let error = new Error("Category not found.")
    error.statusCode = 404
    throw error
  }
  // return next(ErrorHandler("Category not found", 404));

  res.status(201).json({ success: true, categorys });
});

// update category
const updateCategory = catchAsyncErrors(async (req, res, next) => {
  let category = Category.findById(req.params.id);

  if (!category) {
    let error = new Error("Unable to update category.")
    error.statusCode = 404
    throw error
    
  }
  category = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: false,
  });

  res.status(201).json({ success: true, category });
});

//delete category
const deleteCategory = catchAsyncErrors(async (req, res, next) => {
  // console.log("*************************************************");
  let category = await Category.findById(req.params.id);

  if (!category) {
    let error = new Error("Category not found.")
    error.statusCode = 404
    throw error
    
  }
  category = await Category.findByIdAndRemove(req.params.id, req.body);

  res
    .status(201)
    .json({ success: true, message: "category deleted successfully" });
});

module.exports = {
  createCategory,
  getAllCategory,
  getCategoryByid,
  deleteCategory,
  updateCategory,
};
