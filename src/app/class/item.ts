import { Producto } from "./producto";

export class Item {
    id: number;
    fechaAdquisicion: string;
    fechaVencimiento: string;
    producto: Producto

    constructor (id: number,fechaAdquisicion: string, fechaVencimiento: string, producto: Producto)
    {
        this.id = id;
        this.fechaAdquisicion = fechaAdquisicion;
        this.fechaVencimiento = fechaVencimiento;
        this.producto = producto;
    }
}
