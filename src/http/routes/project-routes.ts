import { Router } from "express";
import { authenticationMiddleware } from "../../middleware/authenticationMiddleware";
import { projectController } from "../../config/di-projects";

export const projectRoutes = Router()

projectRoutes.post('/project',authenticationMiddleware, async (req,res,next)=>{
    await projectController.create(req,res,next)
})