import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-prod',
  templateUrl: './consultar-prod.component.html',
  styleUrls: ['./consultar-prod.component.css']
})
export class ConsultarProdComponent implements OnInit {

  prueba: number[];
  constructor() { }

  ngOnInit() {
    this.prueba = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

}
