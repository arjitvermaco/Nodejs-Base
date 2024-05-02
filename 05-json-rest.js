import  express from "express";
import products from "./data.js";
const app = express()
console.log(products)

app.get('/',(req,res)=>{
    res.json(products)
})

app.listen(5500, () => {
    console.log('Server is listening on port 5500....')
})