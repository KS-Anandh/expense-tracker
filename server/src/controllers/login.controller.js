import User from "../models/user.model.js";
import jwt from 'jsonwebtoken'
const login=async(req,res)=>{
    const {userMail,userPassword}=req.body;
    if(!userMail || !userPassword){
        return res.status(400).json("Mail and Password are Required");
    }
    try{
        const verify=await User.findOne({userMail,userPassword});
        if(!verify){
            return res.status(400).json("Enter Currect Mail/Password");
        }
        const payload={
            userId:verify._id,
            userMail:verify.userMail,
            userPassword:userPassword
        }
        const token=jwt.sign(payload,"task",{expiresIn:'1h'})
        if(!token){
            return res.status(500).json("Error while generating token")
        }
        res.status(200).json({msg:"Login Success",token:token});
    }
    catch(err){
        return res.status(500).json("Something went Wrong")
    }
}
export default login;