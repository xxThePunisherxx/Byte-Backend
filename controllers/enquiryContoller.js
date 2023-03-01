const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Enquiry = require("../models/Enquiry.js");

// create
const createEnquiry = catchAsyncErrors(async (req, res, next) => {
  let enquiry = new Enquiry({
    legalName: req.body.legalName,
    email: req.body.email,
    message: req.body.message,
    phoneNumber: req.body.phoneNumber,
    course: req.body.course,
  });
  await enquiry.save();
  res.status(201).json({ success: true, enquiry });
});

// get all
const getAllEnquiry = catchAsyncErrors(async (req, res, next) => {
  const enquiry = await Enquiry.find();
  res.status(201).json({ success: true, enquiry });
});

// get by id
const getEnquiryById = catchAsyncErrors(async (req, res, next) => {
  const enquiry = await Enquiry.findById(req.params.id);

  if (!enquiry) {
    let error = new Error("Form not found");
    error.statusCode = 404;
    throw error;
  }
  res.status(201).json({ enquiry });
});

// update
const updateEnquiry = catchAsyncErrors(async (req, res, next) => {
  let enquiry = Enquiry.findById(req.params.id);

  if (!enquiry) {
    let error = new Error("unable to update Form.");
    error.statusCode = 404;
    throw error;
  }
  enquiry = await Enquiry.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: false,
  });
  res.status(201).json({ enquiry });
});

// delete
const deleteEnquiry = catchAsyncErrors(async (req, res, next) => {
  let enquiry = Enquiry.findById(req.params.id);
  if (!enquiry) {
    let error = new Error("Form not found");
    error.statusCode = 404;
    throw error;
  }
  enquiry = await Enquiry.findByIdAndRemove(req.params.id, req.body);
  res.status(201).json({ message: " Enquiry Form deleted successfully" });
});

module.exports = {
  createEnquiry,
  getAllEnquiry,
  getEnquiryById,
  updateEnquiry,
  deleteEnquiry,
};
