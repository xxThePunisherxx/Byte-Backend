const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const authRoute = require('./routes/trainingRoute.js')
const catRoute = require('./routes/categoryRoute.js')

const PORT = process.env.PORT || 8080

const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())
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
app.use('/api/training', authRoute)
app.use('/api/category', catRoute)
