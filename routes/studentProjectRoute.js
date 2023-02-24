const express = require("express");
const {
  createStudentProject,
  getAllStudentProjects,
  getStudentProjectsById,
  updateStudentProject,
  deleteStudentProject,
} = require("../controllers/studentProjectController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.post("/add", isAuthenticatedUser, createStudentProject);
router.get("/", getAllStudentProjects);
router.get("/:id", getStudentProjectsById);
router.put(
  "/update/:id",
  isAuthenticatedUser,
  authorizeRoles("superAdmin", "admin"),
  updateStudentProject
);
router.delete(
  "/delete/:id",
  isAuthenticatedUser,
  authorizeRoles("superAdmin", "admin"),
  deleteStudentProject
);

module.exports = router;
