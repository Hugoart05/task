import { Plan } from "../domain/Plan.ts";
import { IPlanService } from "../types/IPlanService.ts";


export class PlanService implements IPlanService{
    getUserPlan(userid: number): Promise<Plan>{
        throw new Error("Method not implemented.");
    }
}