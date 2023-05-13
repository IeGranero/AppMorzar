import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginService } from './servicios/loging.service';
import { LoginGuardian } from './modulos/login/login-guardian';
import { RegistrarUsuarioComponent } from './modulos/registrar-usuario/registrar-usuario.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./modulos/contact/contact.module').then((module) => module.ContactModule),canActivate:[LoginGuardian]
  },
  {
    path: 'amigoSel',
    loadChildren: () =>
      import('./modulos/amigos/amigos.module').then((module) => module.amigosModule),canActivate:[LoginGuardian]
  },
  {
    path: 'amigos',
    loadChildren: () =>
      import('./modulos/ActualizaComponent/actualizar.module').then((module) => module.actualizarModule),canActivate:[LoginGuardian]
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modulos/home/home.module').then((module) => module.HomeModule),canActivate:[LoginGuardian]
  },
  {
    path: 'recomendaciones',
    loadChildren: () =>
      import('./modulos/carro/carro.module').then((module) => module.CarroModule),canActivate:[LoginGuardian]
  },
  {
    path: 'form',
    loadChildren: () =>
      import('./modulos/nuevoSitio/nuevoSitio.module').then((module) => module.nuevoSitioModule),canActivate:[LoginGuardian]
  },
  {
    path: 'actualiza/:datoElegido.product',
    loadChildren: () =>
      import('./modulos/ActualizaComponent/actualizar.module').then((module) => module.actualizarModule),canActivate:[LoginGuardian]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modulos/login/login.module').then((module) => module.LoginModule),
  },
 {
  path:'registrar-usuario',component:RegistrarUsuarioComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[LoginService]
})
export class AppRoutingModule {}
