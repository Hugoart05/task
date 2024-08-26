import IParticipante from "../../models/IParticipante.ts";
import { IParticipantRepository } from "../IParticipantRepository.ts";
import RepositoryBase from "./RepositoryBase.ts";

export class ParticipantRepository extends RepositoryBase<IParticipante> implements IParticipantRepository{
    
} 