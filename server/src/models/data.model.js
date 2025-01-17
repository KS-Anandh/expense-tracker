import mongoose from "mongoose";

const dataSchema=mongoose.Schema(
    {
        amount:{
            type:Number,
            required:true
        },
        category:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        }
    }
)
const Data=mongoose.model("data",dataSchema);
export default Data;