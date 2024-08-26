import ITarefas from "./ITarefas.ts"

export default interface IParticipante{
    id:number
    nome:string
    email:string
    usuarioid:number
    tarefas?:ITarefas[]
}