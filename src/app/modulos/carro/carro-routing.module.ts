import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarroComponent } from './carro/carro.component';

const routes: Routes = [
  {
    path: '',
    component: CarroComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarroRoutingModule { }
