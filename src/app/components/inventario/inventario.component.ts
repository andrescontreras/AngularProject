import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/class/producto';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  productos: Producto[];
  prueba: number[];
  constructor() { }

  ngOnInit() {
    this.prueba = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  }
}
