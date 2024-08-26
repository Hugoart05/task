import IProjeto, {} from '../models/IProjeto.ts'

export interface IMailService{
    inviteUserByEmail(destinatario:string):Promise<void>
    sendEmail(destinatario:string, message:string):Promise<void>
}