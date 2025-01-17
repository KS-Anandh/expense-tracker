import Data from "../models/data.model.js";

const remove=async(req,res)=>{
    const {id}=req.params;
    if(!id){
        return res.status(401).json("Id is Required")
    }
    try{
        const Delete=await Data.findByIdAndDelete(id);
        if(!Delete){
           return res.status(401).json("Internal Server Error");
        }
        res.status(200).json("Deletion Success")
    }

    catch(err){
        res.status(500).json("Internal server error")
    }
}

export default remove;