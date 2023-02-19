const express = require("express");
const {
  createTraining,
  getAllTraining,
  getTrainingByid,
  updateTraining,
  deleteTraining,
  createTrainingReview,
} = require("../controllers/trainingcontoller.js");

const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../middleware/auth.js");

const router = express.Router();

router.post(
  "/add",
  isAuthenticatedUser,
  authorizeRoles("superAdmin", "admin"),
  createTraining
);
router.get("/", getAllTraining);
router.get("/:id", getTrainingByid);
router.put(
  "/update/:id",
  isAuthenticatedUser,
  authorizeRoles("superAdmin", "admin"),
  updateTraining
);
router.delete(
  "/delete/:id",
  isAuthenticatedUser,
  authorizeRoles("superAdmin", "admin"),
  deleteTraining
);
router.put("/review", isAuthenticatedUser, createTrainingReview);

module.exports = router;
