import  jwt from "jsonwebtoken"
import User from "../models/User.js"



const register = async(req,res)=>{
    const user = await User.create({...req.body});
    const token = user.createJWT();
    res.status(201).json({user:{name:user.name},token})
}


const login = async (req,res)=>{
   const {email, password} = req.body;
   if(!email || !password){
    res.status(400).json({message:"Email or pass not available"})
   }

   const user = await User.findOne({email})
   if(!user){
    res.status(400).json({message:"Email not found"})
   }
   const isPasswordCorrect = await user.comparePassword(password);
   if(!isPasswordCorrect){
    res.status(400).json({message:"Invalid Credentials"})
   }

   const token = user.createJWT()
   res.status(201).json({ user: { name: user.name }, token })

}

export {login, register}