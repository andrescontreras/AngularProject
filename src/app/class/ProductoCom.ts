import { Producto } from "./producto";
import { Compra } from "./compra";

export class ProductoCom {
  id: number;
  cantidad: number;
  codigoSKU: string;
  compra: Compra;
  nombre: string;
  precio: number;
  undMed: string;



    constructor() {

    }

    /*constructor (id: number,fechaAdquisicion: string, fechaVencimiento: string, producto: Producto)
    {
        this.id = id;
        this.fechaAdquisicion = fechaAdquisicion;
        this.fechaVencimiento = fechaVencimiento;
        this.producto = producto;
    }*/
}
