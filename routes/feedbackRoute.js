const express = require("express");
const {
  createFeedback,
  getAllFeedback,
  getFeedbackById,
  updateFeedback,
  deleteFeedback,
} = require("../controllers/feedbackController");

const router = express.Router();
router.post("/", createFeedback);
router.get("/", getAllFeedback);
router.get("/:id", getFeedbackById);
router.put("/update/:id", updateFeedback);
router.delete("/delete/:id", deleteFeedback);

module.exports = router;
