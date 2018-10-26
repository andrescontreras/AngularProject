import { Producto } from "./producto";
import { Compra } from "./compra";

export class ProductoCom {
  id: number;
  codigoSKU: number;
  nombre: string;
  precio: number;
  undMed: string;
  cantidad: number;
  compra: Compra;

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
