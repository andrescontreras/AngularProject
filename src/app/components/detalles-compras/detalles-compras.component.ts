import { Component, OnInit } from '@angular/core';
import { Compra } from './../../class/compra';
import { RestCompraService } from '../../services/rest-compra.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detalles-compras',
  templateUrl: './detalles-compras.component.html',
  styleUrls: ['./detalles-compras.component.css']
})
export class DetallesComprasComponent implements OnInit {
  compras: Compra;
  id: number;
  constructor(private ruta: ActivatedRoute,private service: RestCompraService) { 
    this.ruta.params.subscribe(params => {
      console.log(params['id'] );
      this.id = params['id'];
      // tslint:disable-next-line:comment-format
      //this.equipo = this._servicio.obtenerUno(params['id'] );
    } );
  }

  ngOnInit() {
    this.compras = new Compra();
    this.getDatos();
  }
  getDatos(){
    console.log("ENTRO get datos del detalle de la compra");
    this.service.getCompraByID(this.id).subscribe(p => {
      this.compras = p
    console.log(p)});
  }

}
