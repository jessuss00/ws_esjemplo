import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcercaDeComponent } from './component/acerca-de/acerca-de.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { ServiciosComponent } from './component/servicios/servicios.component';
import { EquipoComponent } from './component/equipo/equipo.component';
import { PartidosComponent } from './component/partidos/partidos.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'equipo', component: EquipoComponent },
  { path: 'partidos', component: PartidosComponent }	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
