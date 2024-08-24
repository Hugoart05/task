import { NextFunction, Response, Request } from "express";
import { projectValidation } from "../helpers/validations/create-project-validation";
import { IProjectService } from "../types/IProjectService";
import { JWTPayload } from "../types/jwt-payload";
import { AuthenticationRequest } from "../types/authentication-request";

export class ProjectController {
    constructor(
        private readonly projectService:IProjectService
    ) { }

    async create(request: AuthenticationRequest, response: Response, next:NextFunction) {
        try{
            
            const validation = await projectValidation.validate(request.body)
            if(!request.user)
                return response.status(401).json({message:"Usuario não esta autenticado"})
            const { userplan , userid} = request.user as JWTPayload
            const  {message,success} = await this.projectService.createProject(validation,userplan, userid)
            return response.status(success ? 200 : 400).json(message)
            
        }catch(error){
            next(error)
        }
    }

    async assigneParticipant(request: AuthenticationRequest, response: Response, next:NextFunction){
        
    }

}