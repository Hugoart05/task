export interface IMapper<T>{
    map(mapping:T):Promise<object | any>
}