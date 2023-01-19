const express = require('express');
const mongoose = require('mongoose')
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser");
const cors = require('cors')


const productRoute = require('./routes/productRoute.js')
const categoryRoute = require('./routes/categoryRoute.js')
const userRoute = require('./routes/userRoute.js')

const errorMiddleware = require('./middleware/error.js')

const PORT = process.env.PORT || 8080

const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

// database connection
mongoose.set('strictQuery', true)
const db = "mongodb+srv://admin111:admin111@cluster0.nwjdauv.mongodb.net/?retryWrites=true&w=majority"


// const db = "mongodb://127.0.0.1:27017/login"
mongoose.set("strictQuery",true)
mongoose.connect(db, {useNewUrlParser:true,
useUnifiedTopology:true}).then(()=>{
    console.log("connected successfully")
}).catch((err)=>{
    console.log(err)
})

app.listen(PORT, ()=>{
  console.log('server connected')
})

// route
app.get('/', (req,res)=>{
  res.send("Homepage")
})


app.use('/api/product', productRoute)
app.use('/api/category', categoryRoute)
app.use('/api/user', userRoute)


// middleware
app.use(errorMiddleware)