import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NavCajComponent } from './components/nav-caj/nav-caj.component';
import { NewProductoComponent } from './components/new-producto/new-producto.component';
import { NewCompraComponent } from './components/new-compra/new-compra.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { ConsultarProdComponent } from './components/consultar-prod/consultar-prod.component';
import { NewClienteComponent } from './components/new-cliente/new-cliente.component';
import { FooterComponent } from './components/footer/footer.component';
import { HistorialComprasComponent } from './components/historial-compras/historial-compras.component';
import { DetalleProdComponent } from './components/detalle-prod/detalle-prod.component';
import { PrincipalBodComponent } from './components/principal-bod/principal-bod.component';
import { PrincipalCajComponent } from './components/principal-caj/principal-caj.component';
import { NavBodComponent } from './components/nav-bod/nav-bod.component';
import { AppRoutingModule } from './app-routing.module';
import { DetallesComprasComponent } from './components/detalles-compras/detalles-compras.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    NavCajComponent,
    NewProductoComponent,
    NewCompraComponent,
    InventarioComponent,
    ConsultarProdComponent,
    NewClienteComponent,
    FooterComponent,
    HistorialComprasComponent,
    DetalleProdComponent,
    PrincipalBodComponent,
    PrincipalCajComponent,
    NavBodComponent,
    DetallesComprasComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
