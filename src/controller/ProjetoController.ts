import { NextFunction, Response } from "express";
import { IProjectService } from "../types/IProjectService.ts";
import { AuthenticationRequest } from "../types/authentication-request.ts";
import { projectValidation } from "../helpers/validations/create-project-validation.ts";
import { JWTPayload } from "../types/jwt-payload.ts";
import { assigneValidation } from "../helpers/validations/assigne-validation.ts";
import { IParticipantService } from "../types/IParticipantService.ts";


export class ProjectController {
    constructor(
        private readonly projectService: IProjectService,
        private readonly _participantService: IParticipantService,
    ) { }

    async create(request: AuthenticationRequest, response: Response, next: NextFunction) {
        try {
            const validation = await projectValidation.validate(request.body)
            if (!request.user)
                return response.status(401).json({ message: "Usuario não esta autenticado" })
            //busca o plano para saber se tem permissao para inserir o dado
            const { userplan, userid } = request.user as JWTPayload
            const { message, success } = await this.projectService.createProject(validation, userplan, userid)
            return response.status(success ? 200 : 400).json(message)
        } catch (error) {
            next(error)
        }
    }

    async assigneParticipant(request: AuthenticationRequest, response: Response, next: NextFunction) {
        try {
            const user = request.user
            const { projectid, email } = await assigneValidation.validate(request.body, {abortEarly:false})
            const {success, message} = await this._participantService.assignUserToProject(email, projectid)
            return response.status(success ? 200 : 400).json({ message})
        } catch (error) {
            next(error)
        }
    }

    async unlinkFromProject(request: AuthenticationRequest, response: Response, next: NextFunction){
        try{
        }catch(error){
            next(error)
        }
    }

}