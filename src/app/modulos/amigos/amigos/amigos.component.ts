import { Component,  } from '@angular/core';
import { producto } from 'src/app/interfaces/producto.interface';
import { CarroService } from 'src/app/servicios/carro.service';
import { DatosService } from 'src/app/servicios/datos.service';



@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.scss']
})
export class amigosComponent  {

  datos: producto[] = [];
  contador: number[] = [];
  precio: number[] = [];
  datosCarro: number[] = [];

  constructor(
    public datosService: DatosService,
    public carroService: CarroService
  ) {}

  ngOnInit(): void {
    this.datosService.$datos.subscribe({
      next: (response) => {
        this.datos = response;
      },
    });
    this.carroService.$datoscarro.subscribe({
      next: (response) => {
        this.datosCarro = response;
      },
    });

  }

 
  
}
