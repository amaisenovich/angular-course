import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/Ingredient'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients = [
    new Ingredient('Apple', 10),
    new Ingredient('Banana', 4),
    new Ingredient('Peach', 6)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
