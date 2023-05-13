import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { producto } from 'src/app/interfaces/producto.interface';
import { CarroService } from 'src/app/servicios/carro.service';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent implements OnInit {

  actSitios: producto[] = [];
  datos: producto[] = [];
  firstIndexModSitio: number = 0;
  contador: number[] = [];
  precio: number[] = [];
  datosCarro: number[] = [];


  userForm: FormGroup = this.formBuilder.group({
    image: [null, Validators.required],
    product: [null, [Validators.required, Validators.minLength(4)]],
    price: [null, [Validators.required, Validators.min(2)]],
    fav: [false],
    currency: ["€"],
    lat: [null],
    lng:[null],
    rating: [0],
    schedule: [null, [Validators.required, Validators.min(2)]],
    address:[null, [Validators.required, Validators.minLength(4)]],
     
    description: [null, [Validators.required]],
    similarProducts: [[]]
  });

  formValue: any;
  datoModificar:string="";
  constructor(private formBuilder: FormBuilder, public datosService: DatosService, private route:ActivatedRoute, public carroService: CarroService) {}

  ngOnInit(): void {
  //   this.datosService.$datos.subscribe({
  //     next: (response) => {
  //       this.datos = response;
  //       this.getActSitio()
  //     },
  //   });
  // }

  // modificarProducto() {
  //   this.formValue=this.userForm.value
  //   this.datos.push(this.formValue);
  //   this.datosService.setdatos(this.datos);
  //   this.datosService.guardarSitios(this.datos);
  // }

   
  // }getActSitio(){
  //   this.actSitios = this.datos.filter((datos) => {
  //     return datos.fav === true;
  //   });
  // }

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
  this.ContarEntradas();
  this.PrecioEntrada();
}
validarCampo(field: string): boolean {
  return (
    this.userForm.controls[field].invalid &&
   this.userForm.controls[field].touched
 );
  }
ContarEntradas() {
 
    this.datosCarro.forEach(
      (el) => (this.contador[el] = this.contador[el]+1||1)
    );

}

PrecioEntrada() {
  for (let i = 0; i < this.datosCarro.length; i++) {
    this.precio[i] = this.contador[i] * 7.5;
  }
}

EliminarProducto(index: number) {
  for (let i = 0; i < this.datosCarro.length; i++) {
    if (this.datosCarro[i] === index) {
      this.datosCarro.splice(i, 1);
      i--;
    }
  }
  this.contador.splice(index, 1);
  for (let i = 0; i < this.datosCarro.length; i++) {
    this.precio[i] = this.contador[i] * 7.5;
  }
}
}



