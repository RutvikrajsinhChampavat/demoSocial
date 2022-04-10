import { Router } from "express";
import {UserController} from "../controllers/user.controller";
const userRouter = Router()
userRouter.get('/users',(req,res)=>{
    new UserController().getAllUser(req,res)
})
module.exports = userRouter