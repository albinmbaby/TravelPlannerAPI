const express = require('express')
const travelPlanRouter = express.Router()
const {getTravelPlans, getTravelPlanById, createTravelPlan, updateTravelPlan, deleteTravelPlan} = require('../controllers/travelPlanController')

//localhost:3000/travelPlans
travelPlanRouter.get('/',getTravelPlans)

//localhost:3000/travelPlans/123434556
travelPlanRouter.get('/:id',getTravelPlanById)

//create travel plan
travelPlanRouter.post('/',createTravelPlan)

//Update travel Plan
travelPlanRouter.patch('/:id',updateTravelPlan)

//Delete travel plan
travelPlanRouter.delete('/:id',deleteTravelPlan)

module.exports = travelPlanRouter