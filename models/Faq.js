const mongoose = require('mongoose')

const FaqSchema = new mongoose.Schema({
    //schema
    // title
    // description

    
})

const Faq = new mongoose.model('Faq', FaqSchema)
module.exports = Faq