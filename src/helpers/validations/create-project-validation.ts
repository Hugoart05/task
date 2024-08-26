import * as yup from 'yup'
export const projectValidation = yup.object({
    nome:yup.string().required("O campo nome é obrigatório."),
    thumb:yup.string().url().optional()
})

// export default interface IProjeto{
//     id:number
//     nome:string
//     proprietarioid:number
//     participantes?:IParticipante[]
//     tarefas?:ITarefas[]
// }