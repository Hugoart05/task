import { IPlanType } from "../models/IPlanType.ts"

export class Plan {
    private id: number
    private nome: string
    private maxParticipantsInProject: number
    private maxProject: number

    constructor() {
            this.id = 0,
            this.nome = '',
            this.maxParticipantsInProject = 0,
            this.maxProject = 0
    }

    setPlan(plan: IPlanType) {
        if (plan.maxParticipantsPerProject < 0 || plan.maxProjects < 0)
            throw new Error("Valores de participantes ou projetos não podem ser negativos")
        Object.assign(this, plan)
    }

    isProjectCreationAllowed(countUserProject: number): boolean {
        return countUserProject < this.maxProject
    }

    isParticipantsAssigneAllowed(countParticipantsInProject: number): boolean {
        return countParticipantsInProject < this.maxParticipantsInProject
    }

}