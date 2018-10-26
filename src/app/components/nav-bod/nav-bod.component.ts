import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bod',
  templateUrl: './nav-bod.component.html',
  styleUrls: ['./nav-bod.component.css']
})
export class NavBodComponent implements OnInit {

  constructor( private security: SecurityService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  logout() {
    /*
    this.security.logout().subscribe(data => {
        console.log("Cerro sesion");
        this.router.navigate(['/login']);
      }, error => {
        console.error(error);
        console.log("ERROR", error);
      });*/
      this.security.logout();
  }

}
