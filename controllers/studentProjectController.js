const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const StudentProject = require("../models/studentProject");

// create student Project -- admin
export const createStudentProject = catchAsyncErrors(async (req, res, next) => {
  const studentProject = new StudentProject({
    title: req.body.title,
    description: req.body.description,
    duration: req.body.duration,
    ratings: req.body.ratings,
    image: req.body.image,
  });

  await studentProject.save();
  res.status(201).json({ studentProject });
});

// get all students project
export const getAllStudentProjects = catchAsyncErrors(
  async (req, res, next) => {
    const studentProjects = await StudentProject.find();

    res.status(201).json({ studentProjects });
  }
);

// get by id student projects
export const getStudentProjectsById = catchAsyncErrors(
  async (req, res, next) => {
    const studentProject = await StudentProject.findById(req.params.id);
    if (!studentProject) {
      let error = new Error("Student projects not found.");
      error.statusCode = 404;
      throw error;
    }
    res.status(201).json({ studentProject });
  }
);

// update students projects -- admin
export const updateStudentProject = catchAsyncErrors(async (req, res, next) => {
  let studentProject = StudentProject.findById(req.params.id);

  if (!studentProject) {
    let error = new Error("Student projects unable to update.");
    error.statusCode = 404;
    throw error;
  }

  studentProject = await StudentProject.findAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: false,
  });
});

// delete students projects -- admin
export const deleteStudentProject = catchAsyncErrors(async (req, res, next) => {
  let studentProject = StudentProject.findById(req.params.id);

  if (!studentProject) {
    let error = new Error("Student project not found.");
    error.statusCode = 404;
    throw error;
  }
  studentProject = await StudentProject.findAndRemove(req.params.id, req.body);
  res.status(201).json({ message: "Student Project delete successfully" });
});
