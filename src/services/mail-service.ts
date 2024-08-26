import { InvalidCredentials } from "../helpers/custom-errors/custom-error.ts";
import { templateInvite } from "../helpers/htmlTemplate/invite-email-html.ts";
import { IMailService } from "../types/IMailService.ts";
import nodemailer from 'nodemailer'

export default class NodemailerService implements IMailService{
    private transporter: nodemailer.Transporter
    constructor(){
        const user =  process.env.EMAIL || "test";
        const password = process.env.PASSWORD_EMAIL || "test"

        if(!user || !password)
            throw new InvalidCredentials("Credenciais indisponiveis",)

        this.transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
                user:user,
                pass:password
            }
        })
    }

    async inviteUserByEmail(destinatario: string): Promise<void> {
        const linkConfirm = "http://ip:port/endpoint"
        await this.transporter.sendMail({
            to:destinatario,
            subject:"Convite para o projeto na plataforma tal tal tal",
            text:"venha participar do projeto",
            html:templateInvite
        })
    }
    
    sendEmail(destinatario: string, message:string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}