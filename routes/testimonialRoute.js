const express = require("express");
const { createTestimonial, getTestimonial, getTestimonialById, updateTestimonial, deleteTestimonial } = require("../controllers/testimonialController.js");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.post("/add", isAuthenticatedUser, createTestimonial);
router.get("/", getTestimonial);
router.get("/:id", getTestimonialById);
router.put("/update/:id", isAuthenticatedUser, updateTestimonial);
router.delete("/delete/:id", isAuthenticatedUser, deleteTestimonial);

module.exports = router;
