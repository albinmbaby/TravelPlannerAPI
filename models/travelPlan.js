const mongoose = require('mongoose')

const travelPlannerSchema = new mongoose.Schema({
    destination: String,
    startDate:{type:Date,required:true} ,
    endDate:{type:Date,required:true},
    activities: Array
})

module.exports = mongoose.model('travelPlan',travelPlannerSchema)