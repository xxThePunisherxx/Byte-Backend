const mongoose = require("mongoose");
const validator = require("validator");

const enquirySchema = new mongoose.Schema(
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
      validate: [validator.isEmail, "Please enter a valid email"],
    },

    message: {
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
  },
  { timestamps: true }
);

const Enquiry = new mongoose.model("Enquiry", enquirySchema);
module.exports = Enquiry;
