import { Compra } from "./compra";

export class Cliente {
    id: number;
    compras: Compra[];
    identificacion: number;
    nombre: string;
    

    constructor(){

    }
    /*constructor(id: number, identificacion: number, nombre: string, compras: Compra[])
    {
        this.id =  id;
        this.identificacion = identificacion;
        this.nombre =  nombre;
        this.Compras =  compras;
    }*/

}
