const express = require("express");
const {
  createTestinomial,
  getTestonimial,
  getTestinomialById,
  updateTestinomial,
  deleteTestinomial,
} = require("../controllers/TestinomialController.js");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.post("/add", isAuthenticatedUser, createTestinomial);
router.get("/", getTestonimial);
router.get("/:id", getTestinomialById);
router.put("/:id", isAuthenticatedUser, updateTestinomial);
router.delete("/:id", isAuthenticatedUser, deleteTestinomial);

module.exports = router;
