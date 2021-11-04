export interface ResponseOrder{  
    _id: string,
    userId: string,
    client: string;
    products: any,
    status: string,
    dateEntry:Date, 
    dateProcessed?:Date //opcional
    //Esto yo le asigno desde el pipe 
    note?: string,
    total?:string,
}