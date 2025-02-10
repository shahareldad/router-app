import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EngineService {
  private data: any[] = [
    { id: 1, name: 'Guitar', price: '100' },
    { id: 2, name: 'Piano', price: '200' },
    { id: 3, name: 'Violin', price: '300' }
  ];
  
  constructor() { }

  getAllProducts() {
    return of(this.data);
  }

  getProduct(id: number) {
    return of(this.data.find(p => p.id === id));
  }
}
