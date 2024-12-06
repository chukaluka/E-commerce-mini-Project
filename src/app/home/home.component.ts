import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountserviceService } from '../countservice.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  num1 =  '$125.00';
  text1 = 'Fall Limited Edition Sneakers';

  get currentCount() {
    return this.countService.count;
  }

  constructor(private countService: CountserviceService) {}

  incrementCount() {
    this.countService.increment();
  }

  decrementCount() {
    this.countService.decrement();
  }
}
