import jwt from 'jsonwebtoken'

const auth=(req,res,next)=>{
    const token = req.header('Authorization')?.split(' ')[1];
    if(!token){
        res.status(400).json("Token is required")
    }
    try{
        const data=jwt.verify(token,"task");
        if(!data){
            return res.status(500).json("Invalid Token")
        }
        next();
    }
    catch(err){
        return res.status(500).json("Something Went Wrong")
    }

}
export default auth;