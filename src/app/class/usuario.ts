export class Usuario {
    id: number;
    usuario: string;
    contraseña : string;
    tipo: string;

    constructor (id: number, usuario:string, contraseña: string, tipo: string){ 
        this.id = id;
        this.usuario = usuario;
        this.contraseña = contraseña;
        this.tipo = tipo;
    }

}
