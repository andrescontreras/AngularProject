import { Cliente } from "./cliente";
import { Producto } from "./producto";

export class Compra {
    id: number;
    cliente: Cliente;
    fecha: string;
    total: number;
    productos: Producto[];

    constructor(id: number, cliente: Cliente, fecha:string, total:number, productos: Producto[]){
        this.id = id;
        this.cliente = cliente;
        this.fecha = fecha;
        this.total = total;
        this.productos = productos;
    }
}
