import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';

@Component({
  selector: 'app-shopping-list',
  imports: [CommonModule, ShoppingListEditComponent],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {

}
