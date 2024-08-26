import { CustomResult } from "./custom-result.ts";
export interface IParticipantService{
    assignUserToProject(email:string, projectid:number):Promise<CustomResult>
    checkUserInProject(email:string, projectid:number):Promise<boolean>
}