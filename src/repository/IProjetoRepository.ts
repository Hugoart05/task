import IParticipante from "../models/IParticipante";
import IProjeto from "../models/IProjeto";
import IRepository from "./IRepositoryBase";

export interface IProjetoRepository extends IRepository<IProjeto>{
    exist(projectid:number):Promise<boolean>
    getAllParticipants(id:number):Promise<IParticipante>
    count(userid:number):Promise<number>
}