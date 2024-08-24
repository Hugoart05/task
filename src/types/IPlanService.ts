import { Plan } from "../domain/Plan";
import { IPlanType } from "../models/IPlanType";

export interface IPlanService {
    getUserPlan(userid:number):Promise<Plan>
}