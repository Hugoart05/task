import IUser from "../models/IUser";
import IRepository from "./IRepositoryBase";

export default interface IUserRepository extends IRepository<IUser>{
    getByEmail(email:string):Promise<IUser>
    userExist(email:string):Promise<boolean>
}