const travelPlanData = require('../models/travelPlan')
const getTravelPlans = async (req,res) => {
    try {
        const travelPlans = await travelPlanData.find()
        res.status(200).json(travelPlans)
    } catch (error) {
        res.status(500).json({error:error.message}) 
    }
}

//Get travel plan based on id
const getTravelPlanById = async(req,res)=>{
    try {
        const travelPlanID = req.params.id
        const travelPlan = await travelPlanData.findById(travelPlanID)
        if(!travelPlan)return res.status(404).json({message:"Travel Plan not found"})
            res.status(200).json(travelPlan)
    } catch (error) {
        res.status(500).json({error:error.message})  
    }
}

//Create travel plan 
const createTravelPlan = async(req,res)=>{
    try {
        const {destination,startDate,endDate,activities} = req.body
        const newTravelPlan = new travelPlanData({destination,startDate,endDate,activities})
        await newTravelPlan.save()
        res.status(201).json(newTravelPlan)
    } catch (error) {
        res.status(500).json({error:error.message}) 
    }
}

//Update the Travel Plan
const updateTravelPlan = async(req,res)=>{
    try {
        const travelPlanID = req.params.id
        const travelPlan = await travelPlanData.findByIdAndUpdate(travelPlanID,req.body,{new:true})
        if(!travelPlan)return res.status(404).json({message:"Travel Plan not found"})
            res.status(200).json(travelPlan)
    } catch (error) {
        res.status(500).json({error:error.message})  
    }
}

//Delete the travel Plan
const deleteTravelPlan = async(req,res)=>{
    try {
        const travelPlanID = req.params.id
        const travelPlan = await travelPlanData.findByIdAndDelete(travelPlanID)
        if(!travelPlan)return res.status(404).json({message:"Travel Plan not found"})
            res.status(200).json({message:"Travel plan deleted successfully"})
    } catch (error) {
        res.status(500).json({error:error.message})  
    }
}

module.exports = {getTravelPlans,getTravelPlanById,createTravelPlan,updateTravelPlan,deleteTravelPlan}
    
