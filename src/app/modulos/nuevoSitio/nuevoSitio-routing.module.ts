import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { nuevoSitioComponent } from './nuevoSitio/nuevoSitio.component';

const routes: Routes = [
  {
    path: '',
    component: nuevoSitioComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class nuevoSitioRoutingModule { }
