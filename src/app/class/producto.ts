export class Producto {
    id: number;
    cantidad: number;
    codigoSKU: number;
    nombre: string;
    precio: number;
    undMed: string;
    total: number;

    constructor (id: number, cantidad: number, codigoSKU: number, nombre: string, precio:number, undMed: string)
    {
        this.id = id;
        this.cantidad = cantidad;
        this.codigoSKU = codigoSKU;
        this.nombre =  nombre;
        this.precio =  precio;
        this.undMed =  undMed;
        this.total = cantidad * precio;
    }
}
