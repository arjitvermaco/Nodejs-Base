import express from 'express'
import connectDB from './db/connect.js';
import userRouter from './routes/user.route.js';
import jobRouter from './routes/jobs.route.js'

const app = express();

app.use(express.json())

app.use('/user',userRouter)
app.use('/jobs',jobRouter)

// app.listen(5500,()=>{
//     console.log("Listing on port 5500.....")
// })

const startServer = async()=>{
    try {
     await connectDB()
     app.listen(5500,()=>{
        console.log("Listening on port 5500...")
     })
    } catch (error) {
         console.log("Cannot start the server." , error)
    }
}

startServer()