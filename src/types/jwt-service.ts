import IUser from "../models/IUser.ts"

export interface ITokenService{
    generetaToken(data:IUser):string
    refreshToken():string
    validateToken(data:string):boolean
}