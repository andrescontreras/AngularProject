import { Compra } from './../../class/compra';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/class/cliente';
import { Historial } from 'src/app/class/historial';
import { RestClienteService } from '../../services/rest-cliente.service'

@Component({
  selector: 'app-historial-compras',
  templateUrl: './historial-compras.component.html',
  styleUrls: ['./historial-compras.component.css']
})
export class HistorialComprasComponent implements OnInit {

  clientes: Cliente[];
  historial: Historial[];
  constructor(private service: RestClienteService) { }

  ngOnInit() {
    this.clientes = [];
    this.historial = [];
    /*
    var cli: Cliente;
    cli = new Cliente();
    cli.nombre = "clienteabc";
    cli.identificacion = 100010101010;

    var c = new Compra();
    c.cliente = cli;
    c.fecha = "10/09/2018";
    c.total = 23045;

    for (let i = 0; i < 10 ; i++) {
      this.compras.push(c);
    }*/
    this.getDatos();
  }
  getDatos(){
    console.log("ENTRO get datos en historial");
    this.service.getAllData().subscribe(p => {
      console.log("Esto devuelve el get de todas los clientes ",p);
      //console.log("Esto devuelve el get de todas las compras ",p);
      this.clientes = p;
      var i:number;
      var j :number;
      var compra:Compra
      for(i=0;i<this.clientes.length;i++){
        var itemHist : Historial = new Historial();
        itemHist.cliente=this.clientes[i].nombre;
        for(j=0;j<this.clientes[i].compras.length;j++){
          compra = this.clientes[i].compras[j];
          itemHist.fecha = compra.fecha;
          itemHist.total = compra.total;
          this.historial.push(itemHist);
        }
      }
      });
  }

}
