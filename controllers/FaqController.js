const Faq = require('../models/Faq')
const catchAsyncErrors = require('../middleware/catchAsyncErrors.js');

const createFaq = catchAsyncErrors()