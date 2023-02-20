const express = require("express");
const {
  createTeam,
  getTeam,
  getTeamById,
  updateTeam,
  deleteTeam,
} = require("../controllers/teamController.js");

const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../middleware/auth.js");

const router = express.Router();

router.post(
  "/add",
  isAuthenticatedUser,
  authorizeRoles("superAdmin"),
  createTeam
);
router.get("/", getTeam);
router.get("/:id", getTeamById);
router.put(
  "/update/:id",
  isAuthenticatedUser,
  authorizeRoles("superAdmin"),
  updateTeam
);
router.delete(
  "/delete/:id",
  isAuthenticatedUser,
  authorizeRoles("superAdmin"),
  deleteTeam
);

module.exports = router;
