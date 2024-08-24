import { NextFunction, Request, Response } from "express";
import IUserRepository from "../repository/IUserRepository";
import { IMapper } from "../types/IMapper";
import IUser from "../models/IUser";
import { IProjetoRepository } from "../repository/IProjetoRepository";

export default class UserController {
    constructor(
        private readonly userRepository: IUserRepository,
        private readonly _mapper: IMapper<IUser>,
        private readonly projectRepository: IProjetoRepository
    ) { }

    async getUserProfile(request: Request<{ id: number }>, response: Response, next: NextFunction) {
        try {
            const { id } = request.params
            const user = await this.userRepository.get(id)
            if (!user)
                return response.status(404).json({ message: "Usuário não existe." })

            const userDTO = this._mapper.map(user)
            return response.status(200).json(userDTO)
        } catch (error) {
            next(error)
        }
    }


    async getAllUserInProject(request: Request<{ projetoid: number }>, response: Response, next: NextFunction) {
        try {
            const { projetoid } = request.params
            if (isNaN(projetoid) || projetoid <= 0)
                return response.status(400).json({ message: "Parametro inválido" })
            const isExist = await this.projectRepository.exist(projetoid)
            if (!isExist)
                return response.status(409).json({ message: "Projeto não existe" })
            const participants = await this.projectRepository.getAllParticipants(projetoid)
            return response.status(200).json(participants)

        } catch (error) {
            next(error)
        }
    }
}