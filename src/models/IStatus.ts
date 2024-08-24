import ITarefas from "./ITarefas"

export default interface IStatus{
    id:number
    nome:string
    projetoid:number
    tarefas?:ITarefas[]
}