const mongoose = require("mongoose");

const studentProjectSchema = new mongoose.Schema(
  {
    // schema

    title: {
      type: String,
      required: [true, "Please enter the project's title"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Please enter the project's description"],
      trim: true,
      maxLength: [500, "Character cannot exceed more than 500"],
    },

    duration: {
      type: String,
    },

    image: {
      type: String,
      default: "",
    },

    ratings: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const StudentProject = new mongoose.model(
  "StudentProject",
  studentProjectSchema
);

module.exports = StudentProject;
