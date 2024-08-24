import IUser from "../models/IUser";
import { IMapper } from "../types/IMapper";


export default class UserMapper implements IMapper<IUser>{
    map(mapping: IUser): Promise<object | any> {
        throw new Error("Method not implemented.");
    }
}