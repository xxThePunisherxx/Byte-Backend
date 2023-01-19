const mongoose = require('mongoose');
const Category = require('./Category.js')


const ProductSchema = new mongoose.Schema({
  //Schema
  title: {
    type: String,
    required: [true, "Please enter the product name"],
    trim:true
  },

  description: {
    type: String,
    required: true,
  },

  career:{
    type:String,
    required:true,
  },
  
  duration: {
    type: String,
    required: true,
  },

  priority: {
    type: Number,
    min: 1,
    max: 10,
    required:true,
  },

  // image:{
  //   type:String,
  //   default: ""
  // },


  // images:[{type:String}],


  images:[
         {        public_id:{
                      type:String,
                      required:true,
                     },

                   url:{
                      type:String,
                      required:true,
                    }
        }
      ],





  category:{
    type: mongoose.Schema.Types.ObjectId,
    ref:Category,
    required:true,
   
  },


  rating:{
    type:Number,
    default:0,
  },


  createdAt:{
    type:Date,
    default:Date.now
}


});




const Product = new mongoose.model('Product', ProductSchema);
module.exports = Product;