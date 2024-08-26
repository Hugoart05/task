import ITarefas from "../models/ITarefas"

export interface IParticipantDTO{
    id:number
    email:string
    usuarioid:number
    tarefas?:ITarefas[]
}