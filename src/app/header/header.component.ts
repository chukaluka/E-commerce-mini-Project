 import { Component } from '@angular/core';
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
}
