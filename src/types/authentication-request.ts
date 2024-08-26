
import  {Request} from 'express'
import { JWTPayload } from './jwt-payload.ts'


export interface AuthenticationRequest extends Request{
    user?:JWTPayload
}