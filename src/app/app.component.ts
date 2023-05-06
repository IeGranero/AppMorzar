import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DatosService } from './servicios/datos.service';
import { CarroService } from './servicios/carro.service';
import firebase from 'firebase/compat/app'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  constructor(public datosService: DatosService, public carroService: CarroService) { }

 ngOnInit(){
  firebase.initializeApp({
    apiKey: "AIzaSyAusxDsC_FA73Qsp2SdaoVEdyMwiebs2n8",
    authDomain: "appmorzar-90c2a.firebaseapp.com",
    databaseURL: "https://appmorzar-90c2a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "appmorzar-90c2a",
    storageBucket: "appmorzar-90c2a.appspot.com",
    messagingSenderId: "973193600715",
    appId: "1:973193600715:web:b8a5871fc8e6aee89e454e",
    measurementId: "G-WB6P2RDJ5V"
  });
   this.datosService.getDataProduct();
   }


 }

