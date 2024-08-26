import IUser from "./IUser.ts"

export interface IRole{
    id:number
    nome:string
    users?:IUser[]
}