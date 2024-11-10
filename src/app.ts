import express from "express"
import "dotenv/config"
import userController  from "./controllers/users"
import adminController  from "./controllers/admin"
import candidatesController  from "./controllers/candidates"
import votesController  from "./controllers/votes"
import connectToMongo from "./config/db"

const PORT = process.env.PORT || 3000
const app =express()
connectToMongo()

app.use(express.json())
app.use("/api/users",userController)
app.use("/api/admin",adminController)
app.use("/api/votes",votesController)
app.use("/api/candidates",candidatesController)

app.listen(PORT,()=>{console.log(`Server started ,Visit "http://localhost:${PORT}"`)})