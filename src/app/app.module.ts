import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { HomeComponent } from './Paginas/home/home.component';
import { RegistroComponent } from './Paginas/registro/registro.component';
import { CarrucelComponent } from './Componentes/carrucel/carrucel.component';
import { HombreComponent } from './Paginas/hombre/hombre.component';
import { MujerComponent } from './Paginas/mujer/mujer.component';
import { AccesoriosComponent } from './Paginas/accesorios/accesorios.component';
import { GadgetsComponent } from './Paginas/gadgets/gadgets.component';
import { Carrucel1Component } from './Componentes/carrucel1/carrucel1.component';
import { Carrucel2Component } from './Componentes/carrucel2/carrucel2.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegistroUsuariosComponent } from './Componentes/Administracion/registro-usuarios/registro-usuarios.component';
import { MensajesComponent } from './Componentes/mensajes/mensajes.component';
import { ContactenosComponent } from './Componentes/contactenos/contactenos.component';
import { DetalleComponent } from './Componentes/detalle/detalle.component';
import { CarritodecomprasComponent } from './Componentes/carritodecompras/carritodecompras.component';
import { Carrucel3Component } from './Componentes/carrucel3/carrucel3.component';
import { Carrucel4Component } from './Componentes/carrucel4/carrucel4.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegistroComponent,
    CarrucelComponent,
    HombreComponent,
    MujerComponent,
    AccesoriosComponent,
    GadgetsComponent,
    Carrucel1Component,
    Carrucel2Component,
    RegistroUsuariosComponent,
    MensajesComponent,
    ContactenosComponent,
    DetalleComponent,
    CarritodecomprasComponent,
    Carrucel3Component,
    Carrucel4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
