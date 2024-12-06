import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountserviceService {
  count: number = 0;

  constructor() { }

  increment() {
    this.count++;
  }

  decrement() {
    if (this.count > 0)  {
      this.count--;
    }
  }
}
