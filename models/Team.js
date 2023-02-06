const mongoose = require('mongoose')

const TeamSchema = new mongoose.Schema({

    //name
    // image
    // position
    // email
    // social platform
})

const Team = new mongoose.model('Team', TeamSchema)
module.exports = Team