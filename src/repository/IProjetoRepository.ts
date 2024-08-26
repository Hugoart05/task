import IParticipante from "../models/IParticipante.ts"
import IProjeto from "../models/IProjeto.ts"
import IRepository from "./IRepositoryBase.ts"


export interface IProjetoRepository extends IRepository<IProjeto>{
    exist(projectid:number):Promise<boolean>
    getAllParticipants(id:number):Promise<IParticipante>
    count(userid:number):Promise<number>
}