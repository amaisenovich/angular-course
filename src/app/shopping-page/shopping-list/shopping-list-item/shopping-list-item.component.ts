import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/models/ingredient.model'

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {
  ingredient = new Ingredient('Apple', 10)

  constructor() { }

  ngOnInit(): void {
  }

}
