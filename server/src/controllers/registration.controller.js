import User from "../models/user.model.js";

const registration=async (req,res)=>{
    const {userName,userMail,userPassword}=req.body;
    if(!userName || !userMail || !userPassword){
        return res.status(400).json("All Fields Are Required");
    }
    try{
        const exists=await User.findOne({userMail});
        if(exists){
            return res.status(400).json("User Already Exists")
        }
        const user=new User({userName,userMail,userPassword});
        const status= await user.save();
        if(!status){
            return res.status(500).json("Something Went Wrong while Registration");
        }
        res.status(200).json("Registration Success")

    }
    catch(err){
        return res.status(500).json("Something went wrong")
    }
}

export default  registration;