import { Component, OnInit } from '@angular/core';
import {RestCLientService } from '../../services/rest-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = '';
  password = '';
  result: any ; 
  message: any;
  constructor() { }

  ngOnInit() {
  }

  

  
}

