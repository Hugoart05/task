import { Router } from "express";
import accountController from "../../config/di-account";

export const accountRoutes = Router()

accountRoutes.post('/account/signin', async (req,res,next)=>{
    await accountController.signin(req,res,next)
})

accountRoutes.post('/account/register', async (req,res,next)=>{
    await accountController.register(req,res,next)
})

accountRoutes.post('/account/reset', async (req,res,next)=>{
    await accountController.resetPassword(req,res,next)
})