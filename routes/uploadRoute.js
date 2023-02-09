
const { Router } = require('express');

const createFile = require('../controllers/createFile.js');
const { isAuthenticatedUser } = require('../middleware/auth.js');    
const upload = require('../middleware/upload.js');


const fileUploadRouter = Router();
fileUploadRouter
  .route("/single")
  .post(isAuthenticatedUser, upload.single("file"),createFile)

fileUploadRouter.route("/multiple").post(upload.array("files", 10),  createFile);
// here files is the field Name and 10 is the maximum number of file

module.exports =  fileUploadRouter;