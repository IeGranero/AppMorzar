import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { ContactModule } from './modulos/contact/contact.module';
import { HomeModule } from './modulos/home/home.module';
import { HttpClientModule } from '@angular/common/http';


import { CarroModule } from './modulos/carro/carro.module';
import { nuevoSitioModule } from './modulos/nuevoSitio/nuevoSitio.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';

import { GoogleMapsModule } from '@angular/google-maps';
import { actualizarModule } from './modulos/ActualizaComponent/actualizar.module';
import { LoginModule } from './modulos/login/login.module';
import { LoginService } from './servicios/loging.service';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [AppComponent, HeaderComponent,FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ContactModule,
    HomeModule,
 
    CarroModule,
    nuevoSitioModule,
    actualizarModule,
    HttpClientModule,
    GoogleMapsModule,
    LoginModule,
 
  ],
  providers: [CookieService
  
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
