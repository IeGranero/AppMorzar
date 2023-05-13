import { Component, EventEmitter, Input,  Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { producto } from 'src/app/interfaces/producto.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
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
 
  
  contador: number[] = [];

  title= 'gmaps';
  
  position={
    lat: 39.54278468373005, 
    lng: -0.5665005312953497,
  }
 
  label ={
    color:'black',
    text:'Marcador',
   
  }

  @Input() datoElegido!: producto;

  @Output() EliminarPeli = new EventEmitter<any>();
  @Output() Favoritosemit = new EventEmitter<any>();
  @Output() AnyadeCarro = new EventEmitter<any>();
  @Output() modificarProducto = new EventEmitter<any>();
  

  constructor(private formBuilder: FormBuilder,private dialog: MatDialog) {}


  
  EliminaPeli() {
    this.EliminarPeli.emit();
  }

  AnyadirCarro() {
    this.AnyadeCarro.emit();
  }

  Favoritos() {
    this.Favoritosemit.emit();
  }
  ModificarProducto() {
    this.modificarProducto.emit();
   }

  AbrirDialogo(datos: any) {
    this.dialog.open(DialogComponent, {
      width: '400px',
      data: {
        image: datos.image,
        product: datos.product,
        description: datos.description,
        
      },
    });
  }
  validarCampo(field: string): boolean {
    return (
      this.userForm.controls[field].invalid &&
     this.userForm.controls[field].touched
   );
    }
   
}
