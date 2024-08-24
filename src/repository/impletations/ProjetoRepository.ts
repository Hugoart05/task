import IParticipante from '../../models/IParticipante';
import IProjeto from '../../models/IProjeto';
import {IProjetoRepository} from '../IProjetoRepository'
import RepositoryBase from './RepositoryBase';
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