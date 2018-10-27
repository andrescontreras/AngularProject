import { Compra } from './../../class/compra';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/class/cliente';

@Component({
  selector: 'app-historial-compras',
  templateUrl: './historial-compras.component.html',
  styleUrls: ['./historial-compras.component.css']
})
export class HistorialComprasComponent implements OnInit {

  compras: Compra[];
  prueba: number[];
  constructor(private service: RestHistorialComprasService) { }

  ngOnInit() {
    this.prueba = [0,1,2,3,4,5,6];
    this.compras = [];
    this.getDatos();
    var cli: Cliente;
    cli = new Cliente();
    cli.nombre = "clienteabc";
    cli.identificacion = 100010101010;

    var c = new Compra();
    c.cliente = cli;
    c.fecha = "10/09/2018";
    c.total = 23045; 

  }

  getDatos(){
    console.log("Entrada historial compras");
    this.service.getAllData().subscribe(p => this.compras = p);
  }

}
