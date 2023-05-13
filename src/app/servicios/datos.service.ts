import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { producto } from '../interfaces/producto.interface';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from './loging.service';

@Injectable({
  providedIn: 'root',
})
export class DatosService implements OnInit{
  datosService: any;
  constructor(private http: HttpClient, private httpClient:HttpClient, private loginService:LoginService) {}
  ngOnInit(): void {

  }

  $datos: BehaviorSubject<producto[]> = new BehaviorSubject<producto[]>([]);

  setdatos(newdatos: producto[]) {
    this.$datos.next(newdatos);
  
  }

  getDataProduct() {
  //  const url = '/assets/data/datos.json';
   const token=this.loginService.getIdToken();
   console.log(token+"este es el token que pongo")
   const url = ` https://appmorzar-90c2a-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth=${token}`;
     this.http.get<producto[]>(url).subscribe({
     next: (response) => {
       if (!response) return;
       this.$datos.next(response);
   


      },
   });

  }

  guardarSitios(datos:producto[]){
    const token=this.loginService.getIdToken();
    this.httpClient.put(` https://appmorzar-90c2a-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth=${token}`,datos).subscribe(
      response =>console.log("se han guardado los datos"+response),
      error=>console.log("error no se ha guardado nada"+error)
    );
  }
  eliminarSitio(indice:number){
    const token=this.loginService.getIdToken();
    const url=` https://appmorzar-90c2a-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth=${token}`+indice+'.json';
    this.httpClient.delete(url).subscribe(
      response =>console.log("se han eliminado los datos"+response),
      error=>console.log("error no se ha eliminado"+error)
    );
  }
  actualizarSitio(indice:number,sitio:producto){
    
    const token=this.loginService.getIdToken();
    this.httpClient.put(` https://appmorzar-90c2a-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth=${token}`+indice+'.json',sitio).subscribe(
      response =>console.log("se han modificado los datos"+response),
      error=>console.log("error no se ha modificado nada"+error)
    );
  }
}
