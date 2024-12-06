import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountserviceService {
  num1: number =  125.00;
  text1 = 'Fall Limited Edition Sneakers';
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
