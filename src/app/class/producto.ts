export class Producto {
    id: number;
    codigoSKU: string;
    nombre: string;
    precio: number;
    undMed: string;
    cantidad: number;

    constructor() {

    }

    /*constructor (id: number, cantidad: number, codigoSKU: number, nombre: string, precio: number, undMed: string)
    // tslint:disable-next-line:one-line
    {
        this.id = id;
        this.cantidad = cantidad;
        this.codigoSKU = codigoSKU;
        this.nombre =  nombre;
        this.precio =  precio;
        this.undMed =  undMed;
        this.total = cantidad * precio;
    }*/
}
