const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema({
  //Schema
//    _id:{
//         type:mongoose.Schema.Types.ObjectId,
        
//     },

    courseType:{
        type:String,
        required:true,
    }

});


const Category = new mongoose.model('Category', CategorySchema);
module.exports = Category;

