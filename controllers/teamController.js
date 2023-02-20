const Team = require("../models/Team.js");
const ErrorHandler = require("../utils/errorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors.js");

// create Team -- admin
const createTeam = catchAsyncErrors(async (req, res, next) => {
  let user = req.user;
  let userId = user._id;

  let team = new Team({
    name: req.body.title,
    image: req.body.image,
    position: req.body.position,
    socialPlatform: req.body.socialPlatform,
    email: req.body.email,
    user: userId,
  });
  await team.save();
  res.status(201).json({ team });
});

// get all
const getTeam = catchAsyncErrors(async (req, res) => {
  const team = await Team.find();
  res.status(201).json({ success: true, team });
});

// get team by id
const getTeamById = catchAsyncErrors(async (req, res, next) => {
  const team = await Team.findById(req.params.id);

  if (!team) return next(ErrorHandler("not found", 404));
  res.status(201).json({ team });
});

// update team -- admin
const updateTeam = catchAsyncErrors(async (req, res, next) => {
  let team = Team.findById(req.params.id);

  if (!team) {
    return next(ErrorHandler("cannot be update", 404));
  }
  team = await Team.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: false,
  });
  res.status(201).json({ team });
});

// delete team -- admin
const deleteTeam = catchAsyncErrors(async (req, res, next) => {
  let team = Team.findById(req.params.id);

  if (!team) {
    return next(ErrorHandler("team not found", 404));
  }
  team = await Team.findByIdAndRemove(req.params.id, req.body);
  res.status(201).json({ message: "training deleted successfully" });
});

module.exports = {
  createTeam,
  getTeam,
  getTeamById,
  updateTeam,
  deleteTeam,
};
