import express from 'express'
import add from '../controllers/add.controller.js';
import auth from '../middlewares/auth.js';
import remove from '../controllers/remove.controller.js';
import getData from '../controllers/getData.controller.js';

const dataRoute=express.Router();

dataRoute.post("/add",auth,add)
dataRoute.delete("/remove/:id",remove)
dataRoute.get("/",auth,getData)

export default dataRoute;
