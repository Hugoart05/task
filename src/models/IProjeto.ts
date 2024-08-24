import IParticipante from "./IParticipante"
import ITarefas from "./ITarefas"

export default interface IProjeto{
    id:number
    nome:string
    proprietarioid:number
    thumb:string
    participantes?:IParticipante[]
    tarefas?:ITarefas[]
}