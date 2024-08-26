import { IUserDTO } from "../DTOs/UserDTO.ts";
import IUser from "../models/IUser.ts";
import { IMapper } from "../types/IMapper.ts";


export default class UserMapper implements IMapper<IUserDTO>{
    async map(mapping: IUser): Promise<object | any> {
       const {id,email,nome,avatarurl} = mapping 
       return {
            id,email,nome,avatarurl
       }
    }
}