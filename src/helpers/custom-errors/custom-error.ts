export class CustomError extends Error{
    private statuscode:number
    constructor(message:string, statuscode:number | 500){
        super(message)
        this.statuscode = statuscode 
    }
}

export class InvalidCredentials extends CustomError{
    constructor(message:string){
        super(message, 400)
    }
}