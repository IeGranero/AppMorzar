import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { producto } from 'src/app/interfaces/producto.interface';
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
  constructor(private formBuilder: FormBuilder, public datosService: DatosService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.datosService.$datos.subscribe({
      next: (response) => {
        this.datos = response;
        this.getActSitio()
      },
    });
  }

  modificarProducto() {
    this.formValue=this.userForm.value
    this.datos.push(this.formValue);
    this.datosService.setdatos(this.datos);
    this.datosService.guardarSitios(this.datos);
  }

  validarCampo(field: string): boolean {
    return (
      this.userForm.controls[field].invalid &&
      this.userForm.controls[field].touched
    );
  }getActSitio(){
    this.actSitios = this.datos.filter((datos) => {
      return datos.fav === true;
    });
  }
}



