import {DataBase} from '../context/data-base.ts'
import { ProjectController } from '../controller/ProjetoController.ts'
import { ParticipantRepository } from '../repository/impletations/ParticioantRepository.ts'
import { ProjetoRepository } from '../repository/impletations/ProjetoRepository.ts'
import UserRepository from '../repository/impletations/UserRepository.ts'
import NodemailerService from '../services/mail-service.ts'
import ParticipantService from '../services/participant-service.ts'
import { PlanService } from '../services/plan-service.ts'
import ProjectService from '../services/project-service.ts'



const conn = DataBase.getInstance()
const connection = await conn.getConnection()

const projectRepository = new ProjetoRepository(connection, "projetos")
const userRepository = new UserRepository(connection, 'usuarios')
const mailService = new NodemailerService()
const participantRepository = new ParticipantRepository(connection, "participantes")
const planService = new PlanService()

const projectService = new ProjectService(
    projectRepository,
    planService
)
const participantService = new ParticipantService(
    userRepository,
    mailService,
    participantRepository,
    projectRepository
)

export const projectController = new ProjectController(
    projectService,
    participantService
)