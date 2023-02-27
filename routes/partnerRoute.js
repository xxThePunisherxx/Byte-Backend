const express = require("express");
const {
  createPartner,
  getAllPartner,
  getPartnerById,
  updatePartner,
  deletePartner,
} = require("../controllers/partnerController");

const router = express.Router();

router.post("/add", createPartner);
router.get("/", getAllPartner);
router.get("/:id", getPartnerById);
router.put("/update/:id", updatePartner);
router.delete("/delete/:id", deletePartner);

module.exports = router;
