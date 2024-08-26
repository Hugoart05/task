import { Connection } from "mysql2/promise";
import IUser from "../../models/IUser.ts";
import IUserRepository from "../IUserRepository.ts";
import RepositoryBase from "./RepositoryBase.ts";

export default class UserRepository extends RepositoryBase<IUser> implements IUserRepository{
    constructor(conn:Connection, tableName:string){
        super(conn, tableName)
    }

    async userExist(email: string): Promise<boolean> {
        const sql = `SELECT COUNT (*)AS count FROM usuarios WHERE email = ?`
        try{
            const [rows] = await this.conn.query(sql, email)
            const count = (rows  as any)[0].count
            return count > 0 
        }catch(error){
            console.log(error)
            throw error
        }
    }
    async getByEmail(email:string):Promise<IUser>{
        const sql = `SELECT * FROM usuarios WHERE email = ?`
        try{
            const [row] = await this.conn.query(sql, email)
            return (row as any)[0]
        }catch(error){
            console.log("falha ao buscar por email ", error)
            throw error
        }
    }
}

