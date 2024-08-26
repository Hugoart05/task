import { NextFunction , Response, Request} from "express";
import * as yup from 'yup'

export async function errorMiddleware(
    error:Error,
    request:Request,
    response:Response,
    next:NextFunction
){
    if(error instanceof yup.ValidationError)
        return response.status(400).json({message:error.errors})


    if(error instanceof Error)
        return response.status(404).json(error.message)

    return response.status(404).json(error)
}