const express = require("express");
const {
  createEnquiry,
  getAllEnquiry,
  getEnquiryById,
  updateEnquiry,
  deleteEnquiry,
} = require("../controllers/enquiryContoller");

const router = express.Router();
router.post("/add", createEnquiry);
router.get("/", getAllEnquiry);
router.get("/:id", getEnquiryById);
router.put("/update/:id", updateEnquiry);
router.delete("/delete/:id", deleteEnquiry);

module.exports = router;
