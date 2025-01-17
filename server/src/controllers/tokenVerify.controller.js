import jwt from 'jsonwebtoken'
const verifyToken=async(req,res)=>{
    const {token}=req.body;
    if(!token){
        return res.status(400).json("Token is Required")
    }
    const userData=jwt.verify(token,"task")
    if(!userData){
        return res.status(400).json("Invalid token");
    }
    res.status(200).json(userData)

}

export default verifyToken;