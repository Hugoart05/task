export default interface IRepository<T extends object>{
    create(data:Partial<T>):Promise<void>
    get(id:number):Promise<T>
    getAll():Promise<T[] | null>
    update(data:T):Promise<void>
    delete(id:number):Promise<void>
}