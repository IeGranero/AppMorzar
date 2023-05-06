import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { actualizarRoutingModule } from './actualizar-routing.module';
import { ActualizarComponent } from './actualizar/actualizar.component';


@NgModule({
  declarations: [
    ActualizarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    actualizarRoutingModule,
    ReactiveFormsModule
  ]
})
export class actualizarModule { }
