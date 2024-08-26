import { NextFunction } from "express";
import { Response } from 'express'
import { config } from 'dotenv'
import * as jwt from 'jsonwebtoken'
import { AuthenticationRequest } from "../types/authentication-request.ts";
import { JWTPayload } from "../types/jwt-payload.ts";

export function authenticationMiddleware(
    request: AuthenticationRequest,
    response: Response,
    next: NextFunction,
) {
    config()
    const { authorization } = request.headers
    if (!authorization)
        return response.status(401).json({ message: "Acesso negado" })
    
    const token = authorization.split(' ')[1]
    const secrethash = process.env.SECRET_KEY || "defaulthash"
    jwt.verify(token, secrethash, (error, user) => {
        if (error)
            return response.status(403).json({ message: "Token inválido ou expirado" });

        if (user && typeof user !== 'string') {
            request.user = user as JWTPayload
            next()
        }

        return response.status(403).json({ message: "Token inválido." })
    })

}