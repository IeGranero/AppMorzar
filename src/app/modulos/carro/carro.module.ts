import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarroRoutingModule } from './carro-routing.module';
import { CarroComponent } from './carro/carro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarroComponent
  ],
  imports: [
    CommonModule,
    CarroRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CarroModule { }
