 import { Component, HostListener } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { CountserviceService } from '../countservice.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MatBadgeModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hidden = false;
  isDropdownOpen = false;

  multiplyValue(){
    return this.numService * this.currentCount;
  }

  toggleDropdown() {
     this.isDropdownOpen = !this.isDropdownOpen;
  }

  get numService() {
    return this.countService.num1;
  }

  get textService() {
    return this.countService.text1;
  }

  get currentCount() {
    return this.countService.count;
  }

  get shouldShowBadge(): boolean {
    return this.countService.count > 0;
  }

  constructor(private countService: CountserviceService) {}

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  clearCart() {

  }

  // @HostListener('document:click',['$event'])
  // onClick(event: MouseEvent) {
  //   const target = event.target as HTMLElement;
  //   const clickedInside = target.closest('.relative');
  //   if(!clickedInside){
  //     this.isDropdownOpen = false;
  //   }
  // }
}
