const mongoose = require("mongoose");

const TestimonialSchema = new mongoose.Schema({
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

const Testimonial = new mongoose.model("Testimonial", TestimonialSchema);
module.exports = Testimonial;
