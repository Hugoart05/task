import { ProjectController } from "../controller/ProjetoController";
import { ProjetoRepository } from "../repository/impletations/ProjetoRepository";
import { PlanService } from "../services/plan-service";
import ProjectService from "../services/project-service";

const projectRepository = new ProjetoRepository()
const planService = new PlanService()
const projectService = new ProjectService(
    projectRepository,
    planService
)

export const projectController = new ProjectController(projectService)