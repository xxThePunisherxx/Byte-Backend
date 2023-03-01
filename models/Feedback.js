const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
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
    },

    message: {
      type: String,
      required: true,
    },

    phoneNumber: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Feedback = new mongoose.model("Feedback", feedbackSchema);
module.exports = Feedback;
