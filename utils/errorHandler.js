// class ErrorHandler extends Error {
//   constructor(message, statusCode) {
//     super(message);
//     this.statusCode = statusCode;
//     Error.captureStackTrace(this, this.constructor);
//   }
// }

// module.exports = ErrorHandler;

let ErrorHandler = (error, req, res, next) => {
  //just pass error and attach statusCode and message
  // for all
  // like error.statusCode=400
  // like error.message=400 //it can change the error message
  let status = "";
  let message = "";
  console.log(error);
  if (error.code === 11000) {
    status = 400;
    message = `Duplicate key error`;
  } else {
    message = error.message || "Internal server error";
    status = error.statusCode || 500;
  }

  res.status(status).json({
    status: "failure",
    message,
  });
};

module.exports = ErrorHandler;
