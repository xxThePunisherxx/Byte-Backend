const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const trainingRoute = require("./routes/trainingRoute.js");
const categoryRoute = require("./routes/categoryRoute.js");
const userRoute = require("./routes/userRoute.js");
const teamRoute = require("./routes/teamRoute.js");
const testimonialRoute = require("./routes/testimonialRoute.js");
const studentProjectRoute = require("./routes/studentProjectRoute.js");

// Cannot find module '../utils/errorhandler.js'
// const errorMiddleware = require("./middleware/error.js");
const fileUploadRouter = require("./routes/uploadRoute.js");
const ErrorHandler = require("./utils/errorHandler.js");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.static("./public/upload"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// database connection

const db =
  "mongodb+srv://admin111:admin111@cluster0.nwjdauv.mongodb.net/?retryWrites=true&w=majority";

// const db = "mongodb://127.0.0.1:27017/login"
mongoose.set("strictQuery", true);
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log("server connected");
});

// route
app.get("/", (req, res) => {
  res.send("Homepage");
});

app.use("/api/training", trainingRoute);
app.use("/api/category", categoryRoute);
app.use("/api/user", userRoute);
app.use("/api/file", fileUploadRouter);
app.use("/api/team", teamRoute);
app.use("/api/testimonial", testimonialRoute);
app.use("/api/project", studentProjectRoute);

// middleware
app.use(ErrorHandler);
