import IParticipante from "./IParticipante.ts"
import ITarefas from "./ITarefas.ts"


export default interface IProjeto{
    id:number
    nome:string
    proprietarioid:number
    thumb:string
    participantes?:IParticipante[]
    tarefas?:ITarefas[]
}