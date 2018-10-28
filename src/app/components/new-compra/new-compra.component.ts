import { RestCompraService } from './../../services/rest-compra.service';
import { Cliente } from "./../../class/cliente";
import { Component, OnInit } from "@angular/core";
import { Compra } from "src/app/class/compra";
import { Producto } from "src/app/class/producto";
import { Usuario } from "src/app/class/usuario";
import { isEmpty } from "rxjs/operators";
import { RestProductoService } from "src/app/services/rest-producto.service";
import { forEach } from "@angular/router/src/utils/collection";
import { RestClienteService } from "src/app/services/rest-cliente.service";

@Component({
  selector: "app-new-compra",
  templateUrl: "./new-compra.component.html",
  styleUrls: ["./new-compra.component.css"]
})
export class NewCompraComponent implements OnInit {
  // variables producto
  skup = "";
  nombrep = "";
  estado = "";
  numprod = 0;
  cliNom = "";
  cliId = 0;

  alertProd = false;
  alertAdd = false;
  alertCli = false;
  successCli = false;
  successCom = false;
  alertCom = false;
  messageProd: string = "";
  messageAdd: string = "";
  messageCli: string = "";
  messageCom: string = "";

  compra: Compra;
  productos: Producto[];
  inventario: Producto[];
  cliente: Cliente;
  cantidades: number[];
  total: number;
  success = false;
  danger = false;
  msg = "usuario creado";
  constructor(
    private service: RestProductoService,
    private srvClient: RestClienteService,
    private srvCompra: RestCompraService
    ) {}

  ngOnInit() {
    this.compra = new Compra();
    this.productos = [];
    this.inventario = [];
    this.cliente = new Cliente();
    this.cliente.nombre = "";
    this.cliente.identificacion = 0;
    this.cantidades = [];
    this.estado = new Date().toLocaleDateString();
  }
  iniciarComp(){
    this.compra.fecha = new Date().toLocaleDateString();
    this.total = 0;
    this.numprod = 0;
    this.compra.productos = this.productos;
    for (let entry of this.productos) {
      this.total += entry.cantidad * entry.precio;
      this.numprod += entry.cantidad;
    }
    this.compra.total = this.total;
  }
  terminarCompra() {
    this.compra.cliente = this.cliente;
    // llamar rest
    this.srvCompra.crearCompra(this.compra).subscribe( (c) => {
      this.messageCom = "La compra se realizó correctamente";
      this.successCom = true;
    }, error => {
      this.messageCom = "Ocurrio un error al realizar la compra";
      this.alertCom = true;
    });
    this.ngOnInit();

  }

  addProduct(p: Producto) {
    let prod = new Producto();
    prod.codigoSKU = p.codigoSKU;
    prod.id = p.id;
    prod.cantidad = p.cantidad;
    this.inventario.push(prod);
    p.cantidad = 1;
    this.productos.push(p);
    console.log(this.inventario);
  }

  addCantidad(i) {
    this.alertProd = false;
    if (this.productos[i].cantidad + 1 < this.inventario[i].cantidad) {
      this.productos[i].cantidad = this.productos[i].cantidad + 1;
    } else {
      console.log("EXCESO");
      this.messageProd =
        "No hay mas elementos del producto " + this.productos[i].nombre;
      this.alertProd = true;
    }
  }

  removeCantidad(i) {
    this.alertProd = false;
    var cant = this.productos[i].cantidad - 1;
    if (cant > 0) {
      this.productos[i].cantidad = cant;
    } else {
      this.productos.splice(i, 1);
      this.inventario.splice(i, 1);
    }
  }

  buscarProd() {
    this.alertAdd = false;
    console.log("ENTRO BUSCAR");
    console.log("sku-", this.skup, "-nombre-", this.nombrep);
    let product: Producto;
    if (this.skup !== "") {
      // bucar producto por SKU

      this.service.getProductoBySKU(this.skup).subscribe(
        (p: Producto) => {
          product = p;
          this.estado = product.nombre;
          this.addProduct(p);
          this.skup = "";
          this.nombrep = "";
        },
        error => {
          this.messageAdd =
            "El producto con SKU" +
            this.skup +
            " no se encontro en inventario. Por favor verifique el nombre ";
          this.alertAdd = true;
          console.log(error);
        }
      );
    } else if (this.nombrep !== "") {
      // buscar producto por nombre
      this.service.getProductoByNombre(this.nombrep).subscribe(
        (p: Producto) => {
          console.log("99999:", p);
          product = p;
          this.estado = product.nombre;
          this.addProduct(p);
          this.skup = "";
          this.nombrep = "";
        },
        error => {
          this.messageAdd =
            "El producto no se encontro en inventario. Por favor verifique el nombre ";
          this.alertAdd = true;
          console.log(error);
        }
      );
      //this.estado =  product.nombre;
    } else {
      // mostrar error
      this.estado = "VACIO";
      console.log("VACIO");
      this.messageAdd = "Los dos campos estan vacios";
      this.alertAdd = true;
    }
  }

  // parte usuario
  buscarUser() {
    this.alertCli = false;
    if (this.cliNom !== "") {
      this.srvClient.getClientebyNombre(this.cliNom).subscribe( (c) => {
          this.cliente = c;
          this.cliNom = c.nombre;
          this.cliId = c.id;
      }, error => {
        this.messageCli =
          "El cliente " + this.cliente.nombre + " no se encotro. Por favor verifique el nombre" ;
        this.alertCli = true;
        console.log(error);
      }
      );
    } else if (this.cliId !== 0) {
      this.srvClient.getClientebyIdentificacion(this.cliId).subscribe( (c) => {
        this.cliente = c;
        this.cliNom = c.nombre;
        this.cliId = c.id;
      },error => {
        this.messageCli =
        "El cliente con identificacion " + this.cliente.identificacion + " no se encotro. Por favor verifique la identificacion" ;
        this.alertCli = true;
        console.log(error);
      });
    } else {
      this.messageCli = "Los campos estan vacios";
      this.alertCli = true;
    }

  }

  crearUser() {
    this.alertCli = false;
    if(this.cliNom !== "" && this.cliId !== 0)
    {
      let cli = new Cliente();
      cli.nombre = this.cliNom;
      cli.identificacion = this.cliId;
      this.srvClient.crearCliente(cli).subscribe( (c) => {
        this.successCli = true;
        this.messageCli = "El cliente " + this.cliNom +" se creo correctamente";
        this.cliente = c;
      }, error => {
        this.messageCli = "Error en la creacion";
        this.alertCli = true;
      });
    }
    else{
      this.messageCli = "Los campos estan vacios";
      this.alertCli = true;
    }

  }
}
