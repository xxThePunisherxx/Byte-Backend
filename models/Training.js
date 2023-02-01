const mongoose = require("mongoose");
const Category = require("./Category.js");
const User = require('./User.js')

const TrainingSchema = new mongoose.Schema({
  //Schema
  title: {
    type: String,
    required: [true, "Please enter the product name"],
    trim: true,
  },

  description: {
    type: String,
    required: true,
  },

  career: {
    type: String,
    required: true,
  },

  duration: {
    type: String,
    required: true,
  },

  priority: {
    type: Number,
    min: 1,
    max: 10,
    required: true,
  },

  // image:{
  //   type:String,
  //   default: ""
  // },

  // images:[{type:String}],

  images: [
    {
      public_id: {
        type: String,
        required: true,
      },

      url: {
        type: String,
        required: true,
      },
    },
  ],

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Category,
    required: true,
  },

  ratings: {
    type: Number,
    default: 0,
  },

  numOfReviews: {
    type: Number,
    default: 0,
  },

  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true,
      },

      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],


  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:User,
    required:true,
  },

  

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Training = new mongoose.model("Training", TrainingSchema);
module.exports = Training;
