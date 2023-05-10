import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { amigosRoutingModule } from './amigos-routing.module';
import { amigosComponent } from './amigos/amigos.component';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
    amigosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    amigosRoutingModule,
    ReactiveFormsModule,
    HomeModule
  ]
})
export class amigosModule { }
