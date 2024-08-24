import IUser from "../../models/IUser";
import IUserRepository from "../IUserRepository";
import RepositoryBase from "./RepositoryBase";

export default class UserRepository extends RepositoryBase<IUser> implements IUserRepository{
    userExist(email: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async getByEmail(email:string):Promise<IUser>{
        throw new Error("nao implementado")
    }
}

