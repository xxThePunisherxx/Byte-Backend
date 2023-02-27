const Partner = require("../models/Partner.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors.js");

// create
const createPartner = catchAsyncErrors(async (req, res) => {
  let partner = new Partner({
    companyWebsite: req.body.companyWebsite,
    image: req.body.image,
  });
  await partner.save();
  res.status(201).json({ sucess: true, partner });
});
// get
const getAllPartner = catchAsyncErrors(async (req, res) => {
  const partner = await Partner.find();
  res.status(201).json({ sucess: true, partner });
});

// get by id
const getPartnerById = catchAsyncErrors(async (req, res, next) => {
  const partner = await Partner.findById(req.params.id);

  if (!partner) {
    let error = new Error("Error not found");
    error.statusCode = 404;
    throw error;
  }
  res.status(201).json({ partner });
});

// update
const updatePartner = catchAsyncErrors(async (req, res, next) => {
  let partner = Partner.findById(req.params.id);

  if (!partner) {
    let error = new Error("unable to update.");
    error.statusCode = 404;
    throw error;
  }
  partner = await Partner.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: false,
  });
  res.status(201).json({ partner });
});

// delete
const deletePartner = catchAsyncErrors(async (req, res, next) => {
  let partner = Partner.findById(req.params.id);

  if (!partner) {
    let error = new Error("Partner not found");
    error.statusCode = 404;
    throw error;
  }
  partner = await Partner.findByIdAndRemove(req.params.id, req.body);
  res.status(201).json({ message: "Partner deleted successfully" });
});

module.exports = {
  createPartner,
  getAllPartner,
  getPartnerById,
  updatePartner,
  deletePartner,
};
