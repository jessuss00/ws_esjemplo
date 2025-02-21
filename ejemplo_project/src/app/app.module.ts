import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HearderComponent } from './component/hearder/hearder.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContentComponent } from './component/content/content.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { ServiciosComponent } from './component/servicios/servicios.component';
import { AcercaDeComponent } from './component/acerca-de/acerca-de.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { BarraLateralComponent } from './component/barra-lateral/barra-lateral.component';
import { EquipoComponent } from './component/equipo/equipo.component';
import { PartidosComponent } from './component/partidos/partidos.component';

@NgModule({
  declarations: [
    AppComponent,
    HearderComponent,
    FooterComponent,
    ContentComponent,
    InicioComponent,
    ServiciosComponent,
    AcercaDeComponent,
    ContactoComponent,
    BarraLateralComponent,
    EquipoComponent,
    PartidosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
