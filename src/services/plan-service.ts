import { Plan } from "../domain/Plan";
import { IPlanType } from "../models/IPlanType";
import { IPlanService } from "../types/IPlanService";

export class PlanService implements IPlanService{
    getUserPlan(userid: number): Promise<Plan> {
        throw new Error("Method not implemented.");
    }
}