import IUser from "../models/IUser.ts";
import { ITokenService } from "../types/jwt-service.ts";
import JWT from 'jsonwebtoken'
import {config} from 'dotenv'

export class TokenService implements ITokenService{


    generetaToken(data: IUser): string {
        config()
        const key = process.env.SECRET_KEY || "defaultkey"
        return  JWT.sign({
            nome:data.nome, 
            email:data.email, 
            role: data.roleid, 
            plan:data.planid},
            key,{expiresIn:'8h'}
        )
    }
    refreshToken(): string {
        throw new Error("Method not implemented.");
    }
    validateToken(data: string): boolean {
        const key = process.env.SECRET_KEY || "defaultkey"
        try{
            const validate = JWT.verify(data,key)
            return true
        }catch(error){
            return false
        }
    }

}