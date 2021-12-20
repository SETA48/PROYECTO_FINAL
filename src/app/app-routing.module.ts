import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroUsuariosComponent } from './Componentes/Administracion/registro-usuarios/registro-usuarios.component';
import { CarritodecomprasComponent } from './Componentes/carritodecompras/carritodecompras.component';
import { ContactenosComponent } from './Componentes/contactenos/contactenos.component';
import { DetalleComponent } from './Componentes/detalle/detalle.component';
import { AccesoriosComponent } from './Paginas/accesorios/accesorios.component';
import { GadgetsComponent } from './Paginas/gadgets/gadgets.component';
import { HombreComponent } from './Paginas/hombre/hombre.component';
import { HomeComponent } from './Paginas/home/home.component';
import { MujerComponent } from './Paginas/mujer/mujer.component';
import { RegistroComponent } from './Paginas/registro/registro.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'registro',component:RegistroComponent},
  {path:'hombre',component:HombreComponent},
  {path:'mujer',component:MujerComponent},
  {path: 'contactenos',component:ContactenosComponent},
  {path: 'carritodecompras',component:CarritodecomprasComponent},
  {path:'Administracion/registro-usuarios',component:RegistroUsuariosComponent},
  {path:'accesorios',component:AccesoriosComponent},
  {path:'gadgets',component:GadgetsComponent},
  {path:'detalle/:id',component:DetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
