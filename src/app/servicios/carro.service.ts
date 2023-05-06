import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarroService {
  constructor(private http: HttpClient) {}

  $datoscarro: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);

  getData(){
    return this.$datoscarro;
  }

  setData(newdatos: number[]) {
    this.$datoscarro.next(newdatos);
  }
}
