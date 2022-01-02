import { Component } from '@angular/core';
import { Ingredient } from 'src/models/ingredient.model';

@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.css']
})
export class ShoppingPageComponent {
  currentIngredient: Ingredient | null = null

  ingredients: Ingredient[] = []

  onIngredientAdd = (ingredient: Ingredient) => {
    this.ingredients = [
      ...this.ingredients,
      ingredient
    ]
  }

  onIngredientDelete = (ingredient: Ingredient) => {
    this.ingredients = this.ingredients.filter(i => i !== ingredient)
  }

  onIngredientSelection = (ingredient: Ingredient) => {
    this.currentIngredient = ingredient
  }

  onIngredientUnselected = () => {
    this.currentIngredient = null;
  }

  onIngredientUpdate = (ingredient: Ingredient) => {
    this.ingredients = this.ingredients.map(i => i === ingredient ? ingredient : i)
  }
}
