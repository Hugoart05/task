import IProjeto from "../models/IProjeto";
import { CustomResult } from "./custom-result";

export interface IProjectService{
    createProject(project: Partial<IProjeto>, planid:number, userid:number):Promise<CustomResult>
}