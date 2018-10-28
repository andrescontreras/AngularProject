import { Compra } from './../../class/compra';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/class/cliente';
import { RestCompraService } from '../../services/rest-compra.service'

@Component({
  selector: 'app-historial-compras',
  templateUrl: './historial-compras.component.html',
  styleUrls: ['./historial-compras.component.css']
})
export class HistorialComprasComponent implements OnInit {

  compras: Compra[];
  constructor(private service: RestCompraService) { }

  ngOnInit() {
    this.compras = [];
    var cli: Cliente;
    cli = new Cliente();
    cli.nombre = "clienteabc";
    cli.identificacion = 100010101010;

    var c = new Compra();
    c.cliente = cli;
    c.fecha = "10/09/2018";
    c.total = 23045;
    /*
    for (let i = 0; i < 10 ; i++) {
      this.compras.push(c);
    }*/
    this.getDatos();
  }
  getDatos(){
    console.log("ENTRO get datos en historial");
    this.service.getAllData().subscribe(p => {
      console.log("Esto devuelve el get de todas las compras ",p);
      this.compras = p;
      });
  }

}
