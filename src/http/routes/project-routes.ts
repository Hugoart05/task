import { Router } from "express";
import { projectController } from "../../config/di-projects.ts";
import { authenticationMiddleware } from "../../middleware/authenticationMiddleware.ts";

export const projectRoutes = Router()

projectRoutes.post('/project',authenticationMiddleware, async (req,res,next)=>{
    await projectController.create(req,res,next)
})

projectRoutes.post(
    '/project/assign', 
    
    async(req, res, next)=>{
        await projectController.assigneParticipant(req,res,next)
    }
)