const port =  require("../config/config.js");


const createFile = (req, res) => {
  //for single file there is req.file in {}
  //for multiple file there is req.files in [{},{}]
  // req.file will be undefined fro req.multiple

  console.log("**********", req.file);
  if (req.file) {
    //   ************for single file
    // here file information is given in req.file
    //where as other text information is given in req.body
    // let pathArray = req.file.path.split("\\"); //vvimp to split with \  use \\
    let fileName = req.file.filename;
    let path = { path: `http://localhost:${port}/${fileName}` };
    let successJson = {
      status: "success",
      message: "File uploaded successfully.",
      path: path,
    };
    res.json(successJson);
    // if mainhost/.file    is added it is searched in static file
    //localhost:8000/1672933159169houseOfJobBannerImage.png
  } else {
    let paths = req.files.map((file) => {
      let fileName = file.filename;
      let path = `http://localhost:${port}/${fileName}`;
      return { path: path };
    });
    let successJson = {
      status: "success",
      message: "Files uploaded successfully.",
      paths: paths,
    };
    res.json(successJson);
  }
};

module.exports = createFile