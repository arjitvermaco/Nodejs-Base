import  express from "express";

const app = express()

app.get('/',(req,res)=>{
    console.log("User has hit the resource")
    res.status(200).send("Homepage")
})

app.get('/about',(req,res)=>{
    console.log("User has hit the resource")
    res.status(200).send("About")
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5500,()=>{
    console.log("Server listing on Port 5500")
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen