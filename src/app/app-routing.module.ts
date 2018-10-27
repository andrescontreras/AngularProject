import { DetalleProdComponent } from './components/detalle-prod/detalle-prod.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PrincipalBodComponent } from './components/principal-bod/principal-bod.component';
import { PrincipalCajComponent } from './components/principal-caj/principal-caj.component';
import { NewProductoComponent } from './components/new-producto/new-producto.component';
import { NewCompraComponent } from './components/new-compra/new-compra.component';
import { HistorialComprasComponent } from './components/historial-compras/historial-compras.component';
import { ConsultarProdComponent } from './components/consultar-prod/consultar-prod.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  { path: 'registro', component: RegistroComponent},
  { path: 'bodeguero', component: PrincipalBodComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: 'newProduct', component: NewProductoComponent },
      { path: 'inventario', component: InventarioComponent},
      { path: 'detalleProd/:id', component: DetalleProdComponent },

      { path: '', component: NewProductoComponent, pathMatch: 'full' },
      { path: '**', redirectTo: '/bodeguero', pathMatch: 'full' }
    ]
  },
  { path: 'cajero', component: PrincipalCajComponent,
    canActivateChild: [AuthGuard],
    children: [
    { path: 'compra', component: NewCompraComponent},
    { path: 'historial', component: HistorialComprasComponent},
    { path: 'consular-prod', component: ConsultarProdComponent},


    { path: '', component: NewCompraComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '/cajero', pathMatch: 'full' }
    ]
  },

  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { }
