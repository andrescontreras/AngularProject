import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/class/producto';
import { RestProductoService } from '../../services/rest-producto.service'

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  productos: Producto[];
  prueba: number[];
  constructor(private service: RestProductoService) { }

  ngOnInit() {
    this.prueba = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.getDatos();
  }

  getDatos(){
    console.log("ENTRO get datos");
    this.service.getAllData().subscribe(p => this.productos = p);
  }
  eliminarItem(id){
    console.log("ENTRO eliminar item");
    this.service.deleteProducto(id).subscribe(p => {
      this.getDatos();
    });
  }
}
