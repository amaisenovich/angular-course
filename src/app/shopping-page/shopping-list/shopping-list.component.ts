import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/models/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  @Input()
  ingredients: Ingredient[] = []

  @Output()
  selection = new EventEmitter<Ingredient>()

  onIngredientClick = (ingredient: Ingredient) => {
    this.selection.emit(ingredient)
  }
}
