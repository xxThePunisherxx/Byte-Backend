const mongoose = require("mongoose");

const studentProjectSchema = new mongoose.Schema(
  {
    // schema

    title: {
      type: String,
      required: [true, "Please enter the project's title"],
      trim: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Please enter the project's description"],
      maxLength: [500, "Character cannot exceed more than 500"],
    },

    image: {
      type: String,
      default: "",
    },

    githubLink: {
      type: String,
    },
  },
  { timestamps: true }
);

const StudentProject = new mongoose.model(
  "StudentProject",
  studentProjectSchema
);

module.exports = StudentProject;
