import { IUserDTO } from "../DTOs/UserDTO";
import { JWTPayload } from "./jwt-payload";
import  {Request} from 'express'


export interface AuthenticationRequest extends Request{
    user?:JWTPayload
}