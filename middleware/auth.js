const ErrorHandler = require("../utils/errorHandler.js");
const catchAsyncErrors = require("./catchAsyncErrors.js");
const jwt = require("jsonwebtoken");
const User = require("../models/User.js");

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const bearerToken = req.headers.authorization;

  let bearerTokenArray = bearerToken.split(" ");
  let token = bearerTokenArray[1];

  // console.log("***************",token)
  // console.log("**********")
  // console.log(token)
  // const {token} = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Please Login to access this resource", 401));
  }

  // jwt.verify(token, process.env.TOKEN_SECRET, async (err, decoded) => {
  //   console.log(decoded);

  //   let user = await User.findById(decoded.id);
  //   req.user = user;
  // });
  const decodedData = jwt.verify(token, process.env.TOKEN_SECRET);
  req.user = await User.findById(decodedData.id);
  next();
});

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role: ${req.user.role} is not allowed to access this resouce `,
          403
        )
      );
    }

    next();
  };
};
