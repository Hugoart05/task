import IProjeto from "../models/IProjeto";
import { IPlanTypeRepository } from "../repository/IPlanTypeRepository";
import { IProjetoRepository } from "../repository/IProjetoRepository";
import { CustomResult } from "../types/custom-result";
import { IPlanService } from "../types/IPlanService";
import { IProjectService } from "../types/IProjectService";

export default class ProjectService implements IProjectService {
    constructor(
        private readonly projectRepository: IProjetoRepository,
        private readonly planService: IPlanService
    ) { }



    async createProject(project: Partial<IProjeto>, planid: number, userid: number): Promise<CustomResult> {
        try {
            const userPlan = await this.planService.getUserPlan(planid)
            if (!userPlan)
                throw new Error("Não existe um plano associado ao usuário")

            const countProject: number = await this.projectRepository.count(userid)

            if (userPlan.isProjectCreationAllowed(countProject)) {
                const createProject = await this.projectRepository.create(project)
                return { message: "Projeto criado.", success: true }
            }
            return {
                message: "Numero maximo de projetos atingidos para o seu plano.",
                success: false
            }
        } catch (error) {
            return {
                success: false
            }
        }
    }

}