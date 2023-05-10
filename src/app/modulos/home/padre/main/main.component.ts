import { Component, EventEmitter, Input,  Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { producto } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  
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

  constructor(private dialog: MatDialog) {}


  
  EliminaPeli() {
    this.EliminarPeli.emit();
  }

  AnyadirCarro() {
    this.AnyadeCarro.emit();
  }

  Favoritos() {
    this.Favoritosemit.emit();
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

}
