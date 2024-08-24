import { NextFunction , Response, Request} from "express";

async function erroMiddleware(
    response:Response,
    request:Request,
    next:NextFunction,
    error:any
){
    if(error instanceof Error)
        return response.status(404).json("erro")
}