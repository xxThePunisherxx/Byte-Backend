

const { Router } = require('express');

const createFile = require('../controllers/createFile.js');
const { isAuthenticatedUser } = require('../middleware/auth.js');
const upload = require('../middleware/upload.js');


const fileUploadRouter = Router();
fileUploadRouter
  .route("/single")
  .post(isAuthenticatedUser, upload.single("file"), createFile)

  //   here file is the key(field Name) ie while sending file you must use key as file (note you can change filed Name file to any)
  //upload.single("file") middleware store file(or image) of field Name(key) to the destination folder
  //and add res.file information
  //you can get res.file information in createFile
  //   in simple word it add image of field Name file to the server
  .get()
  .delete();
fileUploadRouter.route("/multiple").post(upload.array("files", 10),  createFile);
// here files is the field Name and 10 is the maximum number of file
module.exports =  fileUploadRouter;