export interface ResponseLogin{
    token:string;
}

export interface ResponseGetUser{
   _id:string;
    email:string; 
    password:string;
    roles:any;
    createdAt:any;
}