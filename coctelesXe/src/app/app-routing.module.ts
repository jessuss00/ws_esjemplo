import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoctelesComponent } from './componentes/cocteles/cocteles.component';

const routes: Routes = [
  { path: '', component: CoctelesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
