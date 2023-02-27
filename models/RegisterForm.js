const mongoose = require("mongoose");

const registerFormSchema = new mongoose.Schema(
  {
    // schema
    legalName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    academicLevel: {
      type: String,
      required: true,
    },

    phoneNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    course: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const RegisterForm = new mongoose.model("RegisterForm", registerFormSchema);
module.exports = RegisterForm;
