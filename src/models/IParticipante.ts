import ITarefas from "./ITarefas"

export default interface IParticipante{
    id:number
    nome:string
    email:string
    usuarioid:number
    tarefas:ITarefas[]
}