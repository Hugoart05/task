import IUser from "./IUser"

export interface IRole{
    id:number
    nome:string
    users?:IUser[]
}