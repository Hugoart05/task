import IProjeto from './IProjeto'

export default interface IUser {
    id: number
    nome: string
    email: string
    password: string
    avatar:string,
    roleid:string,
    planoid:string
    projetos?: IProjeto[]
}