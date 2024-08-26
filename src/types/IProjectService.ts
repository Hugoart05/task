import IProjeto from "../models/IProjeto.ts";
import { CustomResult } from "./custom-result.ts";


export interface IProjectService{
    createProject(project: Partial<IProjeto>, planid:number, userid:number):Promise<CustomResult>
}