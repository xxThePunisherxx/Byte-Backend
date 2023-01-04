const mongoose = require('mongoose');
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
//   category: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: Category
//   },
});



const Training = new mongoose.model('Training', TrainingSchema);

module.exports = Training;