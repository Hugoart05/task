import IParticipante from "../../models/IParticipante.ts";
import IProjeto from "../../models/IProjeto.ts";
import { IProjetoRepository } from "../IProjetoRepository.ts";
import RepositoryBase from "./RepositoryBase.ts";

export class ProjetoRepository extends RepositoryBase<IProjeto> implements  IProjetoRepository{
    
    exist(projectid: number): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    getAllParticipants(id: number): Promise<IParticipante> {
        throw new Error('Method not implemented.');
    }
    count(userid: number): Promise<number> {
        throw new Error('Method not implemented.');
    }

}