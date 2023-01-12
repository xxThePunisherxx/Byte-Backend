const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema({
  //Schema
 

    course_type:{
        type:String,
        required:true,
    }

});


const Category = new mongoose.model('Category', CategorySchema);
module.exports = Category;

