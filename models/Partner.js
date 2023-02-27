const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema(
  {
    // schema
    companyWebsite: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Partner = new mongoose.model("Partner", partnerSchema);
module.exports = Partner;
