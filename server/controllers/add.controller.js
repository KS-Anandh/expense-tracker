import Data from "../models/data.model.js";

const add=async(req,res)=>{
    const {amount,category}=req.body;
    if(!amount||!category){
        return res.status(400).json("Amount and Category are required")
    }
    const New=await new Data(req.body);
    const data=await New.save()
    if(!data){
        return res.status(400).json("Something Went Wrong");
    }
    res.status(200).json("Added Successfully");
}

export default add;