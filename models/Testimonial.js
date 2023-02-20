const mongoose = require("mongoose");

const TestinomialSchema = new mongoose.Schema({
  // schema
  name: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  course: {
    type: String,
    required: true,
  },
});

const Testinomial = new mongoose.model("Testinomial", TestinomialSchema);
module.exports = Testinomial;
