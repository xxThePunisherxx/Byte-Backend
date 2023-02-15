// module.exports = (theFunc) => (req,res,next) =>{
//     Promise.resolve(theFunc(req,res,next)).catch(next);
// }

let catchAsyncErrors = (action) => async (req, res, next) => {
  try {
    await action(req, res, next);
  } catch (error) {
    next(error);
  }
};

module.exports = catchAsyncErrors;
