import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-prod',
  templateUrl: './detalle-prod.component.html',
  styleUrls: ['./detalle-prod.component.css']
})
export class DetalleProdComponent implements OnInit {
  equipo: any[] = [];
  id: number;
  constructor(private ruta: ActivatedRoute) {
    this.ruta.params.subscribe(params => {
      console.log(params['id'] );
      this.id = params['id'];
      // tslint:disable-next-line:comment-format
      //this.equipo = this._servicio.obtenerUno(params['id'] );
    } );
  }

  ngOnInit() {
  }

}
