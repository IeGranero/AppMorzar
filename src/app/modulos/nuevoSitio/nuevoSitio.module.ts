import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { nuevoSitioRoutingModule } from './nuevoSitio-routing.module';
import { nuevoSitioComponent } from './nuevoSitio/nuevoSitio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    nuevoSitioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    nuevoSitioRoutingModule,
    ReactiveFormsModule
  ]
})
export class nuevoSitioModule { }
