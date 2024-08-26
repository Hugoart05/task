import { Plan } from "../domain/Plan.ts";


export interface IPlanService {
    getUserPlan(userid:number):Promise<Plan>
}