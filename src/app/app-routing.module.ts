import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginService } from './servicios/loging.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./modulos/contact/contact.module').then((module) => module.ContactModule),
  },
  {
    path: 'amigos',
    loadChildren: () =>
      import('./modulos/amigos/amigos.module').then((module) => module.amigosModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modulos/home/home.module').then((module) => module.HomeModule),
  },
  {
    path: 'recomendaciones',
    loadChildren: () =>
      import('./modulos/carro/carro.module').then((module) => module.CarroModule),
  },
  {
    path: 'form',
    loadChildren: () =>
      import('./modulos/nuevoSitio/nuevoSitio.module').then((module) => module.nuevoSitioModule),
  },
  {
    path: 'actualiza/:datoElegido.product',
    loadChildren: () =>
      import('./modulos/ActualizaComponent/actualizar.module').then((module) => module.actualizarModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modulos/login/login.module').then((module) => module.LoginModule),
  },
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[LoginService]
})
export class AppRoutingModule {}
