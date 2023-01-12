const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema({
  //Schema
    category_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Training"
    },

    course_type:{
        type:String,
        required:true,
    }

});


const Category = new mongoose.model('Category', CategorySchema);
module.exports = Category;

