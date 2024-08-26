import { IParticipantDTO } from "../DTOs/IParticipantDTO.ts";
import { BadRequest } from "../helpers/custom-errors/badrequest-error.ts";
import { NotFound } from "../helpers/custom-errors/conflict-error.ts";
import { IParticipantRepository } from "../repository/IParticipantRepository.ts";
import { IProjetoRepository } from "../repository/IProjetoRepository.ts";
import IUserRepository from "../repository/IUserRepository.ts";
import { CustomResult } from "../types/custom-result.ts";
import { IMailService } from "../types/IMailService.ts";
import { IParticipantService } from "../types/IParticipantService.ts";
import { IProjectService } from "../types/IProjectService.ts";

export default class ParticipantService implements IParticipantService {
    constructor(
        private readonly _userRepository: IUserRepository,
        private readonly _mailService: IMailService,
        private readonly _participantRepository: IParticipantRepository,
        private readonly _projectRepository: IProjetoRepository
    ) { }

    async assignUserToProject(email: string, projectid: number): Promise<CustomResult> {
        const userExists = await this._userRepository.userExist(email)
        const projectExist = await this._projectRepository.exist(projectid)

        if (!projectExist)
            return { success: false, message: "Projeto não existe ou foi finalizado!" }
        if (!userExists){
            await this._mailService.inviteUserByEmail(email)
            return {success:false, message:"Foi enviado um convite por email."}
        }
        const checkUserInProject = await this.checkUserInProject(email, projectid)
        if (checkUserInProject)
            throw new BadRequest("O usuário ja esta participando do projeto.")

        const { nome, id } = await this._userRepository.getByEmail(email)

        await this._participantRepository.create({ nome, email, id })
        return { success: true, message: "Usuário associado com sucesso." }
    }

    checkUserInProject(email: string, projectid: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

