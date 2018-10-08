export class Producto {
    id: number;
    cantidad: number;
    codigoSKU: number;
    nombre: string;
    precio: number;
    undMed: number;

    constructor (id: number, cantidad: number, codigoSKU: number, nombre: string, precio:number, undMed: number)
    {
        this.id = id;
        this.cantidad = cantidad;
        this.codigoSKU = codigoSKU;
        this.nombre =  nombre;
        this.precio =  precio;
        this.undMed =  undMed;
    }
}
