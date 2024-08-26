import { NextFunction } from "express";
import { Response, Request } from "express";
import IUserRepository from "../repository/IUserRepository.ts";
import { signinValidation } from "../helpers/validations/signin-validation.ts";
import { userValidation } from "../helpers/validations/user-create-validation.ts";
import IUser from "../models/IUser.ts";
import JWT from 'jsonwebtoken'
import { IMapper } from "../types/IMapper.ts";
import { IUserDTO } from "../DTOs/UserDTO.ts";
import { ITokenService } from "../types/jwt-service.ts";

export default class AccountController{
    constructor(
        private readonly userRepository:IUserRepository,
        private readonly _mapper:IMapper<IUserDTO>,
        private readonly _tokenService:ITokenService
    ){}

    async signin(request:Request, response:Response, next:NextFunction):Promise<any>{
        try{
            const validationUser = await signinValidation.validate(request.body, {abortEarly:false})
            const user = await this.userRepository.getByEmail(validationUser.email)
            if(user && validationUser.password == user.password){
                //gera token 
                const token = this._tokenService.generetaToken(user)
                //pega só os dados nescessarios do usuário
                const userViewModel = await this._mapper.map(user)
                response.status(200).json({token, user:userViewModel})
            }
            response.status(401).json("Credenciais inválidas.")
        }catch(error){
            console.log(error)
            next(error)
        }
    }

    async register(request:Request, response:Response, next:NextFunction):Promise<any>{
        try{
            const validateUserParam = await userValidation.validate(request.body)
            const user:IUser = Object.assign(validateUserParam)
            user.planid = 1
            user.roleid = 1
            const existUser = await this.userRepository.userExist(validateUserParam.email)
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