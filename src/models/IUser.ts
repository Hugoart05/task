import IProjeto from "./IProjeto.ts"

export default interface IUser {
    id: number
    nome: string
    email: string
    password: string
    avatarurl?:string,
    roleid:number,
    planid:number
    projetos?: IProjeto[]
}