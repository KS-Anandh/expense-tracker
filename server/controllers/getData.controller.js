import Data from "../models/data.model.js"

const getData=async(req,res)=>{
    try{
        const data=await Data.find({});
        res.status(200).json(data)
    }
    catch(err){
        res.status(500).json("Internal Server Error")
    }
}

export default getData;