import { Cliente } from "./cliente";
import { ProductoCom } from "./ProductoCom";

export class Compra {
    id: number;
    cliente: Cliente;
    comprados: ProductoCom[];
    fecha: string;
    total: number;

    /*constructor(id: number, cliente: Cliente, fecha:string, total:number, productos: Producto[]){
        this.id = id;
        this.cliente = cliente;
        this.fecha = fecha;
        this.total = total;
        this.productos = productos;
    }*/
    compra(){

    }
}
