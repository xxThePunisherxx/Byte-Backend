const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Feedback = require("../models/Feedback.js");

// create
const createFeedback = catchAsyncErrors(async (req, res, next) => {
  let feedback = new Feedback({
    legalName: req.body.legalName,
    email: req.body.email,
    message: req.body.message,
    phoneNumber: req.body.phoneNumber,
  });
  await feedback.save();
  res.status(201).json({ success: true, feedback });
});

// get all
const getAllFeedback = catchAsyncErrors(async (req, res) => {
  const feedback = await Feedback.find();
  res.status(201).json({ success: true, feedback });
});

// get by id
const getFeedbackById = catchAsyncErrors(async (req, res, next) => {
  const feedback = await Feedback.findById(req.params.id);

  if (!feedback) {
    let error = new Error("Feedback not found");
    error.statusCode = 404;
    throw error;
  }
  res.status(201).json({ feedback });
});

//update
const updateFeedback = catchAsyncErrors(async (req, res, next) => {
  let feedback = Feedback.findById(req.params.id);

  if (!feedback) {
    let error = new Error("unable to update Form.");
    error.statusCode = 404;
    throw error;
  }
  feedback = await Feedback.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: false,
  });
  res.status(201).json({ feedback });
});

// delete
const deleteFeedback = catchAsyncErrors(async (req, res, next) => {
  let feedback = Feedback.findById(req.params.id);
  if (!feedback) {
    let error = new Error("Form not found");
    error.statusCode = 404;
    throw error;
  }
  feedback = await Feedback.findByIdAndRemove(req.params.id, req.body);
  res.status(201).json({ message: "Feedback deleted successfully" });
});

module.exports = {
  createFeedback,
  getAllFeedback,
  getFeedbackById,
  updateFeedback,
  deleteFeedback,
};
