const multer = require("multer");
const path = require('path')

let limit = {
  fileSize: 1024 * 1024 * 2, //2Mb
  // the max file size (in bytes)
  // 1kb equal to 1024
};
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/upload");
    //vvvimp  ./means root (main) folder
    // note you must make public and files folder manually other it will through (error) no such file or directory
  },
  //destination give the folder location where file is place
  filename: (req, file, cb) => {
    // any file has key and value
    //key is called as fieldName, value is called as originalname
    let fileName = Date.now() + file.originalname;
    cb(null, fileName);
  },
  //filename give the name of file
});
let fileFilter = (req, file, cb) => {
  //filter only image
  let originalName = file.originalname;
  let originalExtension = path.extname(originalName); //note path module is inbuilt module(package) of node js (ie no need to install path package)
  let isValidExtension = [
    ".jpeg",
    ".jpg",
    ".JPG",
    ".JPEG",
    ".png",
    ".svg",
    ".doc",
    ".pdf",
  ].includes(originalExtension);
  if (isValidExtension) {
    cb(null, true);
    //true =>it means  pass such type of file
    //note null represent error since there is no error thus error is null
  } else {
    cb(new Error("File is not supported"), false);
    //false means don't pass such type of file
  }
};
 const upload = multer({
  storage: storage, //we define the location in server where the file is store
  fileFilter: fileFilter, //we filter (generally) according to file
  limit: limit, //we filter file according to its size
});

module.exports = upload