const mongoose = require('mongoose');
const Category = require('../models/Category.js')


const TrainingSchema = new mongoose.Schema({
  //Schema
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  priority: {
    type: Number,
    min: 1,
    max: 10,
  },
  category:{
    type: mongoose.Schema.Types.ObjectId,
    ref: Category,
  }

},{timestamps:true});




const Training = new mongoose.model('Training', TrainingSchema);
module.exports = Training;