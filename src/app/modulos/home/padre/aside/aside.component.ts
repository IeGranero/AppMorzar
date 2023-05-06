import { Component, EventEmitter, Input, Output } from '@angular/core';
import { producto } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent {
  @Input() datos: producto[] | undefined;
  @Input() datosElegido: producto | undefined;
  @Input() datosFiltrado: producto[] | undefined;
  @Input() filtro!: string;
  @Input() estrella!: number;
  @Output() Seleccionado = new EventEmitter<any>();
  @Output() Reseteado = new EventEmitter<any>();
  @Output() Filtrado = new EventEmitter<any>();
  @Output() FiltradoEstrella = new EventEmitter<any>();

  Selecciona(precio: number) {
    this.Seleccionado.emit(precio);
  }

  FiltraEstrellas(estrella: number) {
    this.FiltradoEstrella.emit(estrella);
  }

  FiltraPeli(filtro: string) {
    this.Filtrado.emit(filtro);
  }

  Reset() {
    this.Reseteado.emit();
    this.filtro = "";
    this.estrella = 0;
  }
}
