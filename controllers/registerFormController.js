const { mail } = require("../config/config");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const RegisterForm = require("../models/RegisterForm");
// const sendEmail = require("../utils/sendEmail");
// const nodemailer = require("nodemailer");
const sendMail = require("../utils/sendMail");

// create
// need to sent mail after enroll into course.
const createRegisterForm = catchAsyncErrors(async (req, res, next) => {
  let registerForm = new RegisterForm({
    legalName: req.body.legalName,
    email: req.body.email,
    academicLevel: req.body.academicLevel,
    phoneNumber: req.body.phoneNumber,
    course: req.body.course,
  });

  await registerForm.save();
  // to: ["nitanthapa123@gmail.com", "sandeshbca5@arunima.edu.np"],

  await sendMail({
    from: `Byte <${mail}>`,
    // to: [req.body.email],
    to: ["rupeshduwal17@gmail.com", "sandeshbca5@arunima.edu.np"],

    subject: "Congratulations",
    html: "<h1>Registration Successful<h1>",
  });

  res.status(201).json("Registration successful");
});

// get all
const getAllRegisterForm = catchAsyncErrors(async (req, res) => {
  const registerForm = await RegisterForm.find();
  res.status(201).json({ success: true, registerForm });
});

// get by id
const getRegisterFormById = catchAsyncErrors(async (req, res, next) => {
  const registerForm = await RegisterForm.findById(req.params.id);

  if (!registerForm) {
    let error = new Error("Form not found");
    error.statusCode = 404;
    throw error;
  }
  res.status(201).json({ registerForm });
});

//update
const updateRegisterForm = catchAsyncErrors(async (req, res, next) => {
  let registerForm = RegisterForm.findById(req.params.id);

  if (!registerForm) {
    let error = new Error("unable to update Form.");
    error.statusCode = 404;
    throw error;
  }
  registerForm = await RegisterForm.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: false,
  });
  res.status(201).json({ registerForm });
});

// delete
const deleteRegisterForm = catchAsyncErrors(async (req, res, next) => {
  let registerForm = RegisterForm.findById(req.params.id);
  if (!registerForm) {
    let error = new Error("Form not found");
    error.statusCode = 404;
    throw error;
  }
  registerForm = await RegisterForm.findByIdAndRemove(req.params.id, req.body);
  res.status(201).json({ message: "Form deleted successfully" });
});

module.exports = {
  createRegisterForm,
  getAllRegisterForm,
  getRegisterFormById,
  updateRegisterForm,
  deleteRegisterForm,
};
