import mongoose from 'mongoose'

const userSchema= mongoose.Schema(
    {
        userName:{
            type:String,
            required:true
        },
        userMail:{
            type:String,
            required:true
        },
        userPassword:{
            type:String,
            required:true
        }
    }
)
const User=mongoose.model('users',userSchema)
export default User;