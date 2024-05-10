import  jwt from "jsonwebtoken"

const login = async (req,res)=>{
    console.log("Request recieved")
    const {username,password} = req.body

    if(!username || !password){
        res.status(400).json({"error":"Username or password not present"})
    }
    const id = new Date().getDate()
    const jwt_string = "123123123asdfhasdfhaklh3892"

    const token = jwt.sign({id,username},jwt_string,{
        expiresIn: '30d',
    })

    res.status(200).json({msg:"user created",token})
}

export {login}