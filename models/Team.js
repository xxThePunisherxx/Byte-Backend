const mongoose = require("mongoose");


const TeamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    position:{
      type:String,
      required:true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
    },

    socialPlatform: {
      type: String,
      required: true,
    },


  },
  { timestamps: true }
);

const Team = new mongoose.model("Team", TeamSchema);
module.exports = Team;
