const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Testinomial = require("../models/Testimonial.js");
const ErrorHandler = require("../utils/errorHandler");

// create
const createTestinomial = catchAsyncErrors(async (req, res) => {
  let user = req.user;
  let userId = user._id;

  let testinomial = new Testinomial({
    name: req.body.title,
    image: req.body.image,
    description: req.body.description,
    course: req.body.course,
  });
  await testinomial.save();
  res.status(201).json({ Testinomial });
});

// get all
const getTestonimial = catchAsyncErrors(async (req, res) => {
  const testinomial = await Testinomial.find();
  res.status(201).json({ success: true, testinomial });
});

// get by id
const getTestinomialById = catchAsyncErrors(async (req, res, next) => {
  const testnomial = await Testinomial.findById(req.params.id);

  if (!testnomial) return next(ErrorHandler("not found", 404));
  res.status(201).json({ testnomial });
});

// update testinomial -- admin
const updateTestinomial = catchAsyncErrors(async (req, res, next) => {
  let testinomial = Testinomial.findById(req.params.id);

  if (!testinomial) {
    return next(ErrorHandler("cannot be update", 404));
  }
  testinomial = await Testinomial.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: false,
  });
  res.status(201).json({ team });
});

// delete
const deleteTestinomial = catchAsyncErrors(async (req, res, next) => {
  let testinomial = Testinomial.findById(req.params.id);

  if (!testinomial) {
    return next(ErrorHandler("team not found", 404));
  }
  team = await Team.findByIdAndRemove(req.params.id, req.body);
  res.status(201).json({ message: "testinomial deleted successfully" });
});

module.exports = {
  createTestinomial,
  getTestonimial,
  getTestinomialById,
  updateTestinomial,
  deleteTestinomial,
};
