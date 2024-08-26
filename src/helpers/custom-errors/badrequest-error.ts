import { CustomError } from "./custom-error.ts";

export class BadRequest extends CustomError{
    constructor(message:string){
        super(message, 400)
    }
}