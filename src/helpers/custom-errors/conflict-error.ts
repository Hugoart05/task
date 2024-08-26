import { CustomError } from "./custom-error.ts";

export class NotFound extends CustomError{
    constructor(message:string){
        super(message, 404)
    }
}