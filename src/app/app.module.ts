import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { LoginGuardian } from './modulos/login/login-guardian';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { RegistrarUsuarioComponent } from './modulos/registrar-usuario/registrar-usuario.component';


@NgModule({
  declarations: [AppComponent, HeaderComponent,FooterComponent,RegistrarUsuarioComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ContactModule,
    HomeModule,
    ReactiveFormsModule,
    CarroModule,
    nuevoSitioModule,
    actualizarModule,
    HttpClientModule,
    GoogleMapsModule,
    LoginModule,
    
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [CookieService,LoginGuardian
  
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
