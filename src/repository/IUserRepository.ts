import IUser from "../models/IUser.ts"
import IRepository from "./IRepositoryBase.ts"


export default interface IUserRepository extends IRepository<IUser>{
    getByEmail(email:string):Promise<IUser>
    userExist(email:string):Promise<boolean>
}