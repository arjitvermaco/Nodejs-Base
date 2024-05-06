import express from "express";
import router from "./people.routes.js";
const app = express()

app.use('/',router)

app.listen(5500,()=>{
    console.log("Listening on 5500....")
})
