import { Connection } from "mysql2/promise";
import * as mysql  from "mysql2/promise"

export class DataBase{
    private static instance:DataBase;
    private connection: mysql.Pool
    constructor(){
      this.connection = mysql.createPool({
        host:'localhost',
        user:'root',
        password:'123456',
        database:'taskdb',
        waitForConnections:true,
        connectionLimit:10,
        queueLimit:0
      })
    }

    public async getConnection():Promise<Connection> {
        return this.connection = mysql.createPool({
            host:'localhost',
            user:'root',
            password:'123456',
            database:'taskdb',
            waitForConnections:true,
            connectionLimit:10,
            queueLimit:0
        })
    }

    public static getInstance():DataBase{
        if(!DataBase.instance){
            DataBase.instance = new DataBase();
        }
        return DataBase.instance
    }

    public async close(){
        try{
            await this.connection.end()
        }catch(error){
            console.log("Erro ao fechar a conexão", error)
            throw error
        }
    }


}