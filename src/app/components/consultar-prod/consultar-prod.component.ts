import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/class/producto';
import { RestProductoService } from '../../services/rest-producto.service'

@Component({
  selector: 'app-consultar-prod',
  templateUrl: './consultar-prod.component.html',
  styleUrls: ['./consultar-prod.component.css']
})
export class ConsultarProdComponent implements OnInit {

  prueba: number[];
  productos: Producto[];
  aux: Producto[];
  nombre: String;
  minval: number;
  maxval: number;
  minamm: number;
  maxamm: number;
  constructor(private service: RestProductoService) { }

  ngOnInit() {
    this.prueba = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.productos = [];
    this.aux = [];
  }

  getDatosPorNombre(){
    this.productos = [];
    //let ejemplar = new Producto();
    console.log("Entrada productos");
    console.log(this.nombre);
    this.service.getProductoByNombre(this.nombre).subscribe( (p) => {
      console.log(p);
      this.productos.push(p);
      
    });
  }

  getDatosPorPrecio()
  {
    this.service.getAllData().subscribe(p =>{
      this.aux = p;
      this.productos = [];
      for (let index = 0; index < this.aux.length; index++) {
        if (this.aux[index].precio > this.minval && this.aux[index].precio < this.maxval)
        {
          this.productos.push(this.aux[index]);
        }    
      }
    }); 
  }

  getDatosPorCantidad()
  {
    this.service.getAllData().subscribe(p =>{
      this.aux = p;
      this.productos = [];
      for (let index = 0; index < this.aux.length; index++) {
        if (this.aux[index].cantidad > this.minamm && this.aux[index].cantidad < this.maxamm)
        {
          this.productos.push(this.aux[index]);
        }    
      }
    }); 
  }

}
