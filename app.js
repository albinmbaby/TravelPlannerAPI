const express = require('express')
const mongoose = require('mongoose')
const travelPlanRouter = require('./routers/travelPlanRouter')


const app = express()
app.get('/',(req,res)=>{
    res.send("Welcome to Travel Planner")
})

app.use(express.json())
app.use('/travelPlans',travelPlanRouter)

async function main() {
    await mongoose.connect('mongodb+srv://albinmbaby:JP05yGz97CDiUMPy@cluster0.uj8xr.mongodb.net/TravelPlannerDB');
}
main()
.then(()=>console.log("Database Connected..."))
.catch(err => console.log(err));




app.listen(3000,()=>{
    console.log("Server started....")
})