import IRepository from "../IRepositoryBase";

export default class RepositoryBase<T extends object> implements IRepository<T>{

    create(data: Partial<T>): Promise<void> {
        throw new Error("Method not implemented.");
    }

    get(id: number): Promise<T> {
        throw new Error("Method not implemented.");
    }
    
    getAll(): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    update(data: T): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

}