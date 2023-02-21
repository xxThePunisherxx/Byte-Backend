const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Testimonial = require("../models/Testimonial.js");
const ErrorHandler = require("../utils/errorHandler");

// create
const createTestimonial = catchAsyncErrors(async (req, res) => {
  let user = req.user;
  let userId = user._id;

  let testimonial = new Testimonial({
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
    course: req.body.course,
  });
  await testimonial.save();
  res.status(201).json({ testimonial });
});


// get all
const getTestimonial= catchAsyncErrors(async (req, res) => {
  const testimonial = await Testimonial.find();
  res.status(201).json({ success: true, testimonial });
});


// get by id
const getTestimonialById = catchAsyncErrors(async (req, res, next) => {
  const testimonial = await Testimonial.findById(req.params.id);

  if (!testimonial) return next(ErrorHandler("not found", 404));
  res.status(201).json({ testimonial });
});


// update testinomial -- admin
const updateTestimonial = catchAsyncErrors(async (req, res, next) => {
  let testimonial = Testimonial.findById(req.params.id);

  if (!testimonial) {
    return next(ErrorHandler("cannot be update", 404));
  }

  testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: false,
  });
  res.status(201).json({ testimonial });
});


// delete
const deleteTestimonial = catchAsyncErrors(async (req, res, next) => {
  let testimonial = Testimonial.findById(req.params.id);

  if (!testimonial) {
    return next(ErrorHandler("team not found", 404));
  }
  team = await Testimonial.findByIdAndRemove(req.params.id, req.body);
  res.status(201).json({ message: "Testimonial deleted successfully" });
});

module.exports = {
  createTestimonial,
  getTestimonial,
  getTestimonialById,
  updateTestimonial,
  deleteTestimonial,
};
