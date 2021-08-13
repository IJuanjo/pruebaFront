export interface Agency{
    id:number,
    agencia:string;
    distrito:string;
    direccion:string;
    provincia?:string;
    departamento?:string;
    lat?:number;
    lon?:number;
}