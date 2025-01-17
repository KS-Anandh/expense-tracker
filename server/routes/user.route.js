import express from 'express'
import registration from '../controllers/registration.controller.js';
import login from '../controllers/login.controller.js';
import verifyToken from '../controllers/tokenVerify.controller.js';

const userRoute=express.Router();

userRoute.post("/register",registration);
userRoute.post("/login",login)
userRoute.post("/verify",verifyToken)

export default userRoute;