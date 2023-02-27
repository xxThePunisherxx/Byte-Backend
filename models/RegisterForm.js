const mongoose = require("mongoose");

const registerFormSchema = new mongoose.Schema({
  // schema
  legalName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  academicLevel: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: Number,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
});

const RegisterForm = new mongoose.model("RegisterForm", registerFormSchema);
module.exports = RegisterForm;
