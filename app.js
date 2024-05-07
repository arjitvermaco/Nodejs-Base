import express from 'express'
import connectDB from './db/connect.js';
import router from './routes/tasks.route.js';

const app = express();

app.use(express.json())

app.use('/tasks',router)

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