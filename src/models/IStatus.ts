import ITarefas from "./ITarefas.ts"

export default interface IStatus{
    id:number
    nome:string
    projetoid:number
    tarefas?:ITarefas[]
}