import { NextFunction , Response, Request} from "express";

export async function errorMiddleware(
    error:Error,
    request:Request,
    response:Response,
    next:NextFunction
){
    if(error instanceof Error)
        return response.status(404).json("erro")

    return response.status(404).json("erro")
}