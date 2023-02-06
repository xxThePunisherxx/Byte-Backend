const mongoose = require('mongoose')

const TestinomialSchema = new mongoose.Schema({
    // schema
    // name
    // image
    // description
    // course populate
})

const Testinomial = new mongoose.model('Testinomial', TestinomialSchema)
module.exports = Testinomial