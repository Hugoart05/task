import { Connection } from "mysql2/promise";
import IRepository from "../IRepositoryBase.ts";

export default class RepositoryBase<T extends object> implements IRepository<T>{
    protected tableName:string;
    protected conn:Connection
    constructor(conn:Connection, tableName:string){
        this.conn = conn,
        this.tableName = tableName
    }
    
    async create(data: Partial<T>): Promise<void> {
        const columns = Object.keys(data).join(', ')
        const keys = Object.keys(data)
        const values = Object.values(data)
        const placeholders = values.map(()=>'?').join(', ')
        const query = `INSERT INTO ${this.tableName} (${columns}) VALUES (${placeholders})`;
        console.log(query)
        try{
            const [result] = await this.conn.query(query, values)
        }catch(error){
            console.log(error)
            throw new Error("Falha ao inserir um registro" + this.tableName)
        }
    }

    async get(id: number): Promise<T> {
        const query = `SELECT * FROM ${this.tableName} WHERE id = ?`
        try{
            const [results] = await this.conn.query(query, id)
            await this.conn.end()
            return results as T
        }catch(error){
            throw new Error("Falha ao buscar registro " + this.tableName)
        }
    }
    
    async getAll(): Promise<T[] | null> {
        const query = `SELECT * FROM ${this.tableName}`
        try{
            const [results] = await  this.conn.query(query)
            return results as T[] | null
        }catch(error){
            console.log(error)
            throw new Error("Falha ao buscar todos os registros de  " + this.tableName)
        }
    }
    
    update(data: T): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
}