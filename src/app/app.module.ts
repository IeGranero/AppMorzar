import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { ContactModule } from './modulos/contact/contact.module';
import { HomeModule } from './modulos/home/home.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GuardModule } from './guard/guard.module';
import { FechaInterceptor } from './interceptor/fecha.interceptor';
import { CarroModule } from './modulos/carro/carro.module';
import { nuevoSitioModule } from './modulos/nuevoSitio/nuevoSitio.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';

import { GoogleMapsModule } from '@angular/google-maps';
import { actualizarModule } from './modulos/ActualizaComponent/actualizar.module';
import { LoginModule } from './modulos/login/login.module';
import { LoginService } from './servicios/loging.service';


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
    GuardModule,
    CarroModule,
    nuevoSitioModule,
    actualizarModule,
    HttpClientModule,
    GoogleMapsModule,
    LoginModule,
 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FechaInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
