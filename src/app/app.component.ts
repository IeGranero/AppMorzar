import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DatosService } from './servicios/datos.service';
import { CarroService } from './servicios/carro.service';
import firebase from 'firebase/compat/app'
import { LoginService } from './servicios/loging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  constructor(public datosService: DatosService, public carroService: CarroService, public login:LoginService) { }

 ngOnInit(){
  firebase.initializeApp({
    apiKey: "AIzaSyAusxDsC_FA73Qsp2SdaoVEdyMwiebs2n8",
    authDomain: "appmorzar-90c2a.firebaseapp.com",
    
  });
  
   
   }
   
 }

