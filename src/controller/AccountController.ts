import { NextFunction } from "express";
import IUserRepository from "../repository/IUserRepository";
import { userValidation } from "../helpers/validations/user-create-validation";
import { Response, Request } from "express";
import { signinValidation } from "../helpers/validations/signin-validation";
import * as jwt from 'jsonwebtoken'

export default class AccountController{
    constructor(
        private readonly userRepository:IUserRepository
    ){}

    async signin(request:Request, response:Response, next:NextFunction):Promise<any>{
        try{
            const validationUser = await signinValidation.validate(request.body)
            const user = await this.userRepository.getByEmail(validationUser.email)
            if(user && validationUser.password == user.password){
                const key = process.env.SECRET_KEY || "defaultkey"
                const token =  jwt.sign({
                    nome:user.nome, 
                    email:user.email, 
                    role: user.roleid, 
                    plan:user.planoid},
                    key,{expiresIn:'8h'}
                )

                return response.status(200).json({token})
            }
            return response.status(401).json("Credenciais inválidas.")

        }catch(error){
            next(error)
        }
    }

    async register(request:Request, response:Response, next:NextFunction):Promise<any>{
        try{
            const validateUserParam = await userValidation.validate(request.body)
            const existUser = await this.userRepository.userExist( validateUserParam.email)
            if(existUser)
                return response.status(400).json({message:"Usuário ja existe."})

            await this.userRepository.create(validateUserParam)
            return response.status(200).json({message:"Usuário criado com sucesso"})
        }catch(error){
            //DATABASEERRO
            next(error)
        }
    }

    async resetPassword(request:Request, response:Response, next:NextFunction):Promise<any>{
        try{
            //implementar reset
            //enviar email com a senha nova
            
        }catch(error){

        }
    }
}