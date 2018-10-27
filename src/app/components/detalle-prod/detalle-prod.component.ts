import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/class/producto';
import { RestProductoService } from '../../services/rest-producto.service'

@Component({
  selector: 'app-detalle-prod',
  templateUrl: './detalle-prod.component.html',
  styleUrls: ['./detalle-prod.component.css']
})
export class DetalleProdComponent implements OnInit {
  equipo: any[] = [];
  id: number;
  producto : Producto;
  constructor(private ruta: ActivatedRoute,private service: RestProductoService) {
    this.ruta.params.subscribe(params => {
      console.log(params['id'] );
      this.id = params['id'];
      // tslint:disable-next-line:comment-format
      //this.equipo = this._servicio.obtenerUno(params['id'] );
    } );
  }

  ngOnInit() {
    this.producto = new Producto();
    this.getDatos();
  }
  getDatos(){
    console.log("ENTRO get datos del detalle del producto");
    this.service.getProductoByID(this.id).subscribe(p => this.producto = p);
  }
  cambiarProducto(){
    console.log("ENTRO get datos del detalle del producto");
    this.service.actualizarProducto(this.producto).subscribe(p => this.producto = p);
  }
}
